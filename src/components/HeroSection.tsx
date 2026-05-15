import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] snap-start bg-ink text-paper">
      {/* Top meta strip */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
          <a
            href="#about"
            className="flex items-center gap-2 font-display text-sm font-bold tracking-[0.04em] text-paper"
          >
            <img src={logo} alt="" className="h-6 w-6" />
            <span>rhdevs</span>
          </a>
          <p className="section-label">
            <span className="text-paper">Cohort 26 / 27</span>
            <span className="mx-2 text-rule">·</span>
            Singapore
          </p>
        </div>
      </div>

      {/* Hero content, top-aligned with breathing room below */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col justify-between px-6 pb-12 pt-32 sm:px-10 sm:pt-40">
        <div className="grid w-full gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="section-label">Nº 00 — Index</p>
            <h1 className="mt-6 font-display text-display font-extrabold text-paper">
              RH<span className="text-oxblood">·</span>Developers
            </h1>
            <p className="mt-10 max-w-[40ch] font-body text-lead text-paper">
              A student-led developer community at Raffles. We run an annual
              programme of seven workshops and one flagship hackathon, with
              OpenAI and NUS StartIT.
            </p>
          </div>

          <aside className="hidden self-end lg:col-span-3 lg:block">
            <div className="border-t border-rule pt-4">
              <p className="section-label">Now showing</p>
              <p className="mt-3 font-display text-h4 font-extrabold leading-tight text-paper">
                New Frontiers
              </p>
              <p className="mt-1 text-sm text-paper-muted">
                Flagship hackathon · with OpenAI &amp; NUS StartIT
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom CTA + ledger row */}
        <div className="mt-16 flex flex-col gap-8 border-t border-rule pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#cohort" className="px-6">
                See the cohort
                <span aria-hidden className="ml-1">→</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#programme" className="px-6">
                26 / 27 Programme
              </a>
            </Button>
          </div>

          <p className="max-w-md text-sm text-paper-muted lg:text-right">
            <span className="tabular text-paper">07</span> workshops
            <span className="mx-2 text-rule">·</span>
            <span className="tabular text-paper">01</span> flagship hackathon
            <span className="mx-2 text-rule">·</span>
            <span className="tabular text-paper">02</span> partners.
            <br className="hidden sm:block" />
            Presented in the academic year 2026 / 27.
          </p>
        </div>
      </div>
    </section>
  );
}
