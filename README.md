# RHDevs website

The public site for RHDevs, the student engineering and design team at Raffles Hall, NUS.

- **Stack:** React + Vite + Tailwind v4, statically generated at build time. Ships about 1 kB of JS.
- **Hosting:** Vercel (`vercel.json`).
- **Content:** every fact, flag and TODO is in [`src/content.ts`](src/content.ts).

## Scripts

```bash
npm install
npm run dev        # dev server, server-rendered like production
npm run build      # client build + SSR build + prerender to dist/
npm run preview    # serve dist/ locally
npm run assets     # regenerate favicons, portraits, product screenshots, OG images
```

`npm run build` writes `dist/index.html`, `dist/new-frontiers.html` and `dist/404.html` with all content in the raw HTML. Check it with:

```bash
curl -s https://rhdevs-portfolio-website.vercel.app/ | grep -o "We build the software Raffles Hall runs on"
```

## Adding things

- **Product screenshot:** crop it and blur any residents' names, put the PNG in `assets-src/products/` (e.g. `rhapp.png`), run `npm run assets`, then set `screenshot` on that product in `src/content.ts` using the `.webp` path and the width and height the script prints. Only the `.webp` in `public/products/` ships.
- **Sponsor deck:** put the PDF at `public/new-frontiers-sponsor-deck.pdf` and set `newFrontiers.sponsorDeckUrl` to `/new-frontiers-sponsor-deck.pdf`.
- **Sponsor:** only after they sign, add `{ name, url, logo? }` to `newFrontiers.sponsors`.
- **Portrait:** replace the photo in `assets-src/`, adjust its crop in `scripts/generate-assets.mjs`, run `npm run assets`.

Search the code for `TODO(content)` to find every open item.
