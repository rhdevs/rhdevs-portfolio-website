/*
 * Build-time renderer. scripts/prerender.mjs calls render() for every route
 * and writes static HTML, so all content is in the raw HTML with no JS.
 */
import { renderToStaticMarkup } from "react-dom/server";
import { site } from "@/content";
import { Home } from "@/pages/Home";
import { NewFrontiers } from "@/pages/NewFrontiers";
import { NotFound } from "@/pages/NotFound";

interface RouteDef {
  path: string;
  file: string;
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
  page: () => React.JSX.Element;
  index?: boolean;
}

export const routes: RouteDef[] = [
  {
    path: "/",
    file: "index.html",
    title: "RHDevs · We build the software Raffles Hall runs on",
    description:
      "RHDevs is a 25-person student engineering and design team at Raffles Hall, NUS. We build and maintain RHApp, used by about 500 residents, and the bots behind the hall's CCA claims and peer support.",
    ogImage: "/og/home.png",
    ogImageAlt: "RHDevs: we build the software Raffles Hall runs on. ~500 residents, 100% of CCA claims, 30+ CCA leaders.",
    page: Home,
  },
  {
    path: "/new-frontiers",
    file: "new-frontiers.html",
    title: "New Frontiers · A 36-hour AI hackathon by RHDevs",
    description:
      "New Frontiers is a 36-hour AI hackathon for about 200 NUS students, proposed for 19 to 21 February 2027 and organised by RHDevs at Raffles Hall, NUS.",
    ogImage: "/og/new-frontiers.png",
    ogImageAlt: "New Frontiers: a 36-hour AI hackathon for about 200 NUS students. Proposed 19 to 21 Feb 2027.",
    page: NewFrontiers,
  },
  {
    path: "/404",
    file: "404.html",
    title: "Not found · RHDevs",
    description: "This page does not exist.",
    ogImage: "/og/home.png",
    ogImageAlt: "RHDevs",
    page: NotFound,
    index: false,
  },
];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function render(route: RouteDef) {
  const Page = route.page;
  const html = renderToStaticMarkup(<Page />);
  const url = `${site.url}${route.path === "/" ? "/" : route.path}`;
  const img = `${site.url}${route.ogImage}`;

  const head = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.index === false
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="RHDevs" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(route.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<meta name="twitter:image:alt" content="${esc(route.ogImageAlt)}" />`,
  ].join("\n    ");

  return { html, head };
}
