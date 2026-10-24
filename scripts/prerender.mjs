/*
 * Static generation. Runs after `vite build` (client) and `vite build --ssr`.
 * For each route: render to HTML, inject head tags, inline the CSS, preload
 * the two webfonts, and write the file into dist/.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { routes, render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

let template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Inline the stylesheet: one fewer render-blocking request on first paint.
template = template.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (_, href) => {
  const css = fs.readFileSync(path.join(dist, href), "utf8");
  return `<style>${css}</style>`;
});

// Preload the latin subsets of both variable fonts.
const assets = fs.readdirSync(path.join(dist, "assets"));
const preloads = ["inter-latin-wght-normal", "jetbrains-mono-latin-wght-normal"]
  .map((prefix) => assets.find((f) => f.startsWith(prefix) && f.endsWith(".woff2")))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join("\n    ");

for (const route of routes) {
  const { html, head } = render(route);
  const out = template
    .replace("<!--head-->", `${preloads}\n    ${head}`)
    .replace("<!--app-->", html);
  fs.writeFileSync(path.join(dist, route.file), out);
  console.log(`prerendered ${route.path.padEnd(16)} -> dist/${route.file} (${(out.length / 1024).toFixed(1)} kB)`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
