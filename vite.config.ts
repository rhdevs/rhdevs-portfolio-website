import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/*
 * Dev only: render pages on the server so `npm run dev` matches the static
 * build. Production HTML is written by scripts/prerender.mjs.
 */
function devPrerender(): Plugin {
  return {
    name: "rhdevs-dev-prerender",
    apply: "serve",
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          const url = (req.url ?? "/").split("?")[0];
          if (!req.headers.accept?.includes("text/html")) return next();
          try {
            const mod = await server.ssrLoadModule("/src/entry-server.tsx");
            const pathname = url === "/" ? "/" : url.replace(/\/$/, "");
            const find = (p: string) => mod.routes.find((r: { path: string }) => r.path === p);
            const route = find(pathname) ?? find("/404");
            const { html, head } = mod.render(route);
            const template = await server.transformIndexHtml(url, (await import("fs")).readFileSync("index.html", "utf8"));
            res.statusCode = route.path === "/404" ? 404 : 200;
            res.setHeader("Content-Type", "text/html");
            res.end(template.replace("<!--head-->", head).replace("<!--app-->", html));
          } catch (e) {
            server.ssrFixStacktrace(e as Error);
            next(e);
          }
        });
      };
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), devPrerender()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
