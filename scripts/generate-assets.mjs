/*
 * Generates every static image the site ships. Run with `npm run assets`
 * after changing anything in assets-src/.
 *
 *   assets-src/logo.png        -> public/brand/*, public/favicon.ico
 *   assets-src/team-*.jpg      -> public/team/{name}-{w}.{avif,webp}
 *   assets-src/products/*.png  -> public/products/*.webp (prints dimensions)
 *   (text + fonts)             -> public/og/{home,new-frontiers}.png  1200x630
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const root = process.cwd();
const src = (p) => path.join(root, "assets-src", p);
const pub = (p) => path.join(root, "public", p);
const ensure = (p) => fs.mkdirSync(path.dirname(p), { recursive: true });

const BG = { r: 4, g: 7, b: 7 };
// The logo bar is remapped to fg-2 (#8A9092) so it reads clearly on #040707.
const BAR = [138, 144, 146];

/* ---------------- Logo (on-dark variant) ---------------- */
// The source logo's bar is #2F302F, which disappears on #040707. Remap the
// greyscale ramp so the bar lands on a light grey and white stays white.
async function logoOnDark() {
  const { data, info } = await sharp(src("logo.png")).trim().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const t = Math.min(1, Math.max(0, (data[i] - 47) / (255 - 47)));
    for (let c = 0; c < 3; c++) data[i + c] = Math.round(BAR[c] + (255 - BAR[c]) * t);
  }
  const side = Math.max(info.width, info.height);
  return sharp(data, { raw: info })
    .extend({
      top: Math.floor((side - info.height) / 2),
      bottom: Math.ceil((side - info.height) / 2),
      left: Math.floor((side - info.width) / 2),
      right: Math.ceil((side - info.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function iconOnBg(logo, size, pad = 0.16) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(logo).resize(inner, inner).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: { ...BG, alpha: 1 } } })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

function toIco(pngs) {
  // ICO container with embedded PNGs (supported by all current browsers).
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entries = pngs.map(({ size, buf }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]);
}

async function brand() {
  const logo = await logoOnDark();
  ensure(pub("brand/x"));
  await sharp(logo).resize(64, 64).webp({ quality: 90 }).toFile(pub("brand/logo-64.webp"));
  await sharp(logo).resize(128, 128).webp({ quality: 90 }).toFile(pub("brand/logo-128.webp"));
  await sharp(logo).resize(512, 512).png().toFile(pub("brand/logo-512.png"));
  fs.writeFileSync(pub("brand/apple-touch-icon.png"), await iconOnBg(logo, 180));
  fs.writeFileSync(pub("brand/icon-192.png"), await iconOnBg(logo, 192));
  fs.writeFileSync(pub("brand/icon-512.png"), await iconOnBg(logo, 512));
  const ico = await Promise.all([16, 32, 48].map(async (size) => ({ size, buf: await iconOnBg(logo, size, 0.08) })));
  fs.writeFileSync(pub("favicon.ico"), toIco(ico));
  fs.writeFileSync(
    pub("site.webmanifest"),
    JSON.stringify(
      {
        name: "RHDevs",
        short_name: "RHDevs",
        icons: [
          { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        theme_color: "#040707",
        background_color: "#040707",
        display: "standalone",
      },
      null,
      2,
    ),
  );
  console.log("brand: logo, favicon.ico, icons, manifest");
  return logo;
}

/* ---------------- Team portraits ---------------- */
// Crops are 4:5 boxes chosen by eye on the source photos.
const portraits = [
  { file: "team-head.jpg", out: "patrick", crop: { left: 0, top: 142, width: 768, height: 960 } },
  { file: "team-eng1.jpg", out: "zhiyuan", crop: { left: 64, top: 0, width: 512, height: 640 } },
  { file: "team-eng2.jpg", out: "ram", crop: { left: 128, top: 0, width: 512, height: 640 } },
];

async function team() {
  ensure(pub("team/x"));
  for (const p of portraits) {
    const base = sharp(src(p.file)).extract(p.crop);
    for (const w of [p.crop.width, Math.round(p.crop.width / 2)]) {
      const img = base.clone().resize(w);
      await img.clone().avif({ quality: 52 }).toFile(pub(`team/${p.out}-${w}.avif`));
      await img.clone().webp({ quality: 78 }).toFile(pub(`team/${p.out}-${w}.webp`));
    }
    console.log(`team: ${p.out}`);
  }
}

/* ---------------- Product screenshots ---------------- */
async function productShots() {
  // Sources are already cropped, with residents' names blurred; only the .webp ships.
  const dir = src("products");
  if (!fs.existsSync(dir)) return;
  ensure(pub("products/x"));
  for (const f of fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
    const input = path.join(dir, f);
    const out = pub(`products/${f.replace(/\.(png|jpe?g)$/i, ".webp")}`);
    const meta = await sharp(input).metadata();
    const width = Math.min(meta.width, 1800);
    const info = await sharp(input).resize(width).webp({ quality: 82 }).toFile(out);
    // Phone-sized variant, picked up by ScreenshotSlot's srcset.
    if (info.width > 640) await sharp(input).resize(640).webp({ quality: 80 }).toFile(out.replace(/.webp$/, "-640.webp"));
    console.log(`product: /products/${path.basename(out)}  width: ${info.width}, height: ${info.height}`);
  }
}

/* ---------------- Partner logos ---------------- */
// Official files from each partner, trimmed and scaled to a common height.
async function partners() {
  const dir = src("partners");
  if (!fs.existsSync(dir)) return;
  ensure(pub("partners/x"));
  for (const f of fs.readdirSync(dir).filter((f) => /.(png|jpe?g|svg|webp)$/i.test(f))) {
    const id = f.replace(/.[^.]+$/, "");
    const info = await sharp(path.join(dir, f), { density: 300 })
      .trim()
      .resize({ height: 160, width: 480, fit: "inside" })
      .webp({ quality: 90 })
      .toFile(pub(`partners/${id}.webp`));
    console.log(`partner: logo: { src: "/partners/${id}.webp", width: ${info.width}, height: ${info.height} }`);
  }
}

/* ---------------- OG images ---------------- */
const font = (pkg, file) => fs.readFileSync(path.join(root, "node_modules", pkg, "files", file));
const fonts = [
  { name: "Inter", data: font("@fontsource/inter", "inter-latin-400-normal.woff"), weight: 400 },
  { name: "Inter", data: font("@fontsource/inter", "inter-latin-600-normal.woff"), weight: 600 },
  { name: "Mono", data: font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-400-normal.woff"), weight: 400 },
  { name: "Mono", data: font("@fontsource/jetbrains-mono", "jetbrains-mono-latin-500-normal.woff"), weight: 500 },
];

const h = (type, style, children) => ({ type, props: { style: { display: "flex", ...style }, children } });
const FG = "#F6F6F4";
const FG2 = "#8A9092";
const LINE = "#343B3D";

function frame(logoUri, eyebrow, body, footer) {
  // Fixed inner box: satori does not shrink a padded fixed-size root.
  return h("div", { width: 1200, height: 630, background: "#040707", color: FG, fontFamily: "Inter" }, [
    h("div", { width: 1072, height: 502, margin: 64, flexDirection: "column" }, [
      h("div", { justifyContent: "space-between", alignItems: "center" }, [
        h("div", { alignItems: "center", gap: 16 }, [
          { type: "img", props: { src: logoUri, width: 52, height: 52 } },
          h("div", { fontSize: 30, fontWeight: 600, letterSpacing: -0.6 }, "RHDevs"),
        ]),
        h("div", { fontFamily: "Mono", fontSize: 18, color: FG2, letterSpacing: 2.4 }, eyebrow),
      ]),
      h("div", { flex: 1, flexDirection: "column", justifyContent: "center" }, body),
      h("div", { borderTop: `1px solid ${LINE}`, paddingTop: 28 }, footer),
    ]),
  ]);
}

const stat = (value, label, first) =>
  h("div", { flex: 1, flexDirection: "column", gap: 6, paddingLeft: first ? 0 : 28, borderLeft: first ? "none" : `1px solid ${LINE}` }, [
    h("div", { fontFamily: "Mono", fontWeight: 500, fontSize: 54, letterSpacing: -2, lineHeight: 1 }, value),
    h("div", { fontSize: 20, color: FG2 }, label),
  ]);

async function og(logo) {
  const logoUri = `data:image/png;base64,${(await sharp(logo).resize(104, 104).png().toBuffer()).toString("base64")}`;

  const pages = {
    home: frame(
      logoUri,
      "RAFFLES HALL · NUS",
      [h("div", { fontSize: 88, fontWeight: 600, letterSpacing: -4, lineHeight: 0.98, maxWidth: 1000 }, "We build the software Raffles Hall runs on.")],
      [
        stat("~600", "residents use RHApp", true),
        stat("100%", "of CCA claims via Finance bot"),
        stat("70+", "CCA leaders on it"),
      ],
    ),
    "new-frontiers": frame(
      logoUri,
      "UPCOMING · IN PLANNING",
      [
        h("div", { fontSize: 150, fontWeight: 600, letterSpacing: -7.5, lineHeight: 0.95 }, "New Frontiers"),
        h("div", { fontSize: 36, color: FG, marginTop: 24, letterSpacing: -0.8 }, "A 36-hour AI hackathon for about 200 NUS students."),
      ],
      [
        stat("19–21 Feb", "2027, proposed", true),
        stat("36h", "kickoff Friday, pitches Sunday"),
        stat("1 + 3", "main track + subtracks"),
      ],
    ),
  };

  ensure(pub("og/x"));
  for (const [name, tree] of Object.entries(pages)) {
    const svg = await satori(tree, { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
    await sharp(png).png({ compressionLevel: 9, palette: true }).toFile(pub(`og/${name}.png`));
    console.log(`og: /og/${name}.png`);
  }
}

const logo = await brand();
await team();
await productShots();
await partners();
await og(logo);
