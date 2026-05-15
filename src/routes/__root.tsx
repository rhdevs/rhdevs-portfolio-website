import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="max-w-md">
        <p className="section-label">Nº 404</p>
        <h1 className="mt-3 text-h2 font-display font-extrabold text-paper">
          Not found
        </h1>
        <p className="mt-4 text-paper-muted">
          The page you were looking for has moved, been retired, or never existed.
        </p>
        <Link
          to="/"
          className="underline-grow mt-8 inline-flex items-center gap-2 font-display font-semibold uppercase tracking-[0.06em] text-oxblood"
        >
          Return to the index
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RHDevs — A student-led developer community at Raffles" },
      {
        name: "description",
        content:
          "RHDevs is a student-led developer community at Raffles. Cohort 26/27 runs an annual programme of seven workshops and the New Frontiers hackathon with OpenAI and NUS StartIT.",
      },
      { property: "og:title", content: "RHDevs — Developer community at Raffles" },
      {
        property: "og:description",
        content:
          "An annual programme of workshops and a flagship hackathon, in partnership with OpenAI and NUS StartIT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://api.fontshare.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=general-sans@400,500,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadContent />
      {children}
      <Scripts />
    </>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.005 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  return (
    <>
      {/*
        Knockout filter for partner JPGs. Maps the source's luminance into
        the alpha channel (dark pixels → opaque, bright pixels → transparent)
        and remaps RGB to the warm paper color. Used via .logo-knockout.
      */}
      <svg width="0" height="0" aria-hidden focusable="false" className="absolute size-0">
        <defs>
          <filter id="logo-knockout" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                0 0 0 0 0.945
                0 0 0 0 0.928
                0 0 0 0 0.879
                -0.34 -0.34 -0.34 0 1.02
              "
            />
          </filter>
        </defs>
      </svg>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </>
  );
}
