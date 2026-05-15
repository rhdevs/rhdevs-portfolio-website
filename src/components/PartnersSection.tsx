import { ScrollReveal } from "@/components/ScrollReveal";
import startitLogo from "@/assets/startit_logo.jpg";
import openaiLogo from "@/assets/openai_logo.jpg";

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative bg-ink-sunk py-[clamp(5rem,2rem+6vw,9rem)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10">
        <ScrollReveal>
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <p className="section-label">Nº 04 — Partners</p>
              <h2 className="mt-3 font-display text-h2 font-extrabold leading-[1.02] text-paper">
                In partnership with
              </h2>
              <p className="mt-6 measure-narrow text-paper-muted">
                Co-signed by organisations that take student work seriously.
                The flagship hackathon, New Frontiers, is run in collaboration
                with these partners.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-y-10 lg:col-span-7 lg:grid-cols-2 lg:gap-x-12">
              <li className="flex flex-col gap-5 border-t border-rule pt-7">
                <div className="flex h-24 items-center">
                  <img
                    src={openaiLogo}
                    alt="OpenAI"
                    className="h-10 w-auto logo-knockout"
                  />
                </div>
                <div>
                  <p className="font-display text-h4 font-extrabold text-paper">OpenAI</p>
                  <p className="mt-1 text-sm text-paper-muted">
                    Collaborator on the New Frontiers hackathon.
                  </p>
                </div>
              </li>

              <li className="flex flex-col gap-5 border-t border-rule pt-7">
                <div className="flex h-24 items-center">
                  <img
                    src={startitLogo}
                    alt="NUS StartIT Club"
                    className="h-12 w-auto logo-knockout"
                  />
                </div>
                <div>
                  <p className="font-display text-h4 font-extrabold text-paper">NUS StartIT</p>
                  <p className="mt-1 text-sm text-paper-muted">
                    University-side organising partner for New Frontiers.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
