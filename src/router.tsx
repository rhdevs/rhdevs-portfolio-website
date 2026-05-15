import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="max-w-md">
        <p className="section-label">Nº ERR</p>
        <h1 className="mt-3 font-display text-h2 font-extrabold text-paper">
          Something broke
        </h1>
        <p className="mt-4 text-paper-muted">
          An unexpected error occurred while loading this view.
        </p>
        {import.meta.env.DEV && error.message && (
          <pre className="mt-6 max-h-40 overflow-auto rounded-md border border-rule bg-ink-raised p-4 text-left text-xs text-paper-muted">
            {error.message}
          </pre>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-oxblood px-5 py-2 font-display text-sm font-semibold uppercase tracking-[0.06em] text-paper transition-colors duration-200 hover:bg-oxblood-deep"
          >
            Try again
          </button>
          <a
            href="/"
            className="underline-grow font-display text-sm font-semibold uppercase tracking-[0.06em] text-paper"
          >
            Return to index
          </a>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
