import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  {
    id: "01",
    title: "Mission",
    body:
      "Equip students with technical skill, project experience, and a working collaborator's mindset, through workshops, team projects, and innovation-led activities.",
  },
  {
    id: "02",
    title: "Vision",
    body:
      "Be the developer community in Singapore secondary education that produces future-ready creators, leaders, and problem-solvers.",
  },
  {
    id: "03",
    title: "Practice",
    body:
      "Learn out loud. Build in public. Ship things that work, not pitch decks. Help the next member do the same.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-ink py-[clamp(6rem,2rem+8vw,11rem)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="section-label">Nº 01 — About</p>
              <h2 className="mt-4 font-display text-h2 font-extrabold text-paper">
                We run a tech CCA the way a small studio runs itself.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={0.05}>
              <p className="text-lead measure-prose text-paper">
                RHDevs is a student-led developer community at Raffles. We
                exist for students who want to build things that work, not
                students who only want to read about technology. The bar we
                hold is the bar a working tech studio would hold.
              </p>
            </ScrollReveal>

            <ol className="mt-14 space-y-12 sm:mt-20">
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.id} delay={0.1 + i * 0.05}>
                  <li className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 sm:grid-cols-[6rem_1fr] sm:gap-x-10">
                    <span
                      className="font-display text-h3 font-extrabold leading-none text-oxblood tabular"
                      data-numeric
                    >
                      {pillar.id}
                    </span>
                    <div>
                      <h3 className="font-display text-h4 font-bold leading-tight text-paper">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 measure-prose text-paper-muted">
                        {pillar.body}
                      </p>
                    </div>
                    <span className="col-span-2 mt-2 h-px w-full bg-rule-faint" />
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
