import { ScrollReveal } from "@/components/ScrollReveal";
import teamHead from "@/assets/team-head.jpg";
import teamEng1 from "@/assets/team-eng1.jpg";
import teamEng2 from "@/assets/team-eng2.jpg";
import teamDesign from "@/assets/team-design.jpg";

interface RosterMember {
  name: string;
  role: string;
  department: "Engineering" | "Design";
  image: string;
}

const roster: RosterMember[] = [
  { name: "Zhiyuan", role: "Engineering Head", department: "Engineering", image: teamEng1 },
  { name: "Ram", role: "Engineering Head", department: "Engineering", image: teamEng2 },
  { name: "Aksh Bhatia", role: "Design Head", department: "Design", image: teamDesign },
];

export function CohortSection() {
  return (
    <section
      id="cohort"
      className="relative bg-ink py-[clamp(6rem,2rem+8vw,12rem)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-y-3 border-b border-rule pb-6">
            <div>
              <p className="section-label">Nº 02 — Cohort</p>
              <h2 className="mt-3 font-display text-h2 font-extrabold text-paper">
                The 26 / 27 cohort
              </h2>
            </div>
            <p className="text-sm text-paper-muted">
              <span className="tabular text-paper">04</span> people
              <span className="mx-2 text-rule">·</span>
              Raffles, Singapore
            </p>
          </div>
        </ScrollReveal>

        {/* Head — asymmetric, photo on left, name+role on right */}
        <article className="mt-[clamp(4rem,1rem+6vw,8rem)] grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <ScrollReveal className="lg:col-span-5">
            <figure className="plate aspect-[4/5] w-full max-w-[460px]">
              <img
                src={teamHead}
                alt="Patrick Steve Harrison, Head of RHDevs"
                width={460}
                height={575}
                className="h-full w-full object-cover"
              />
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:col-span-7 lg:pt-6">
            <p className="section-label">Head of RHDevs</p>
            <h3 className="mt-3 font-display text-h1 font-extrabold leading-[0.95] tracking-[-0.025em] text-paper">
              Patrick<br />Steve Harrison
            </h3>
            <p className="mt-8 measure-narrow text-lead text-paper-muted">
              Sets direction for the 26/27 cohort, the annual programme, and
              the partnerships. Recruits, plans, and ships.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-5 border-t border-rule pt-6 text-sm sm:max-w-md">
              <dt className="section-label">Role</dt>
              <dd className="text-paper">Head</dd>
              <dt className="section-label">Cohort</dt>
              <dd className="text-paper tabular">26 / 27</dd>
              <dt className="section-label">Based</dt>
              <dd className="text-paper">Raffles, SG</dd>
            </dl>
          </ScrollReveal>
        </article>

        {/* Roster */}
        <div className="mt-[clamp(5rem,2rem+6vw,9rem)] border-t border-rule pt-8">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {roster.map((member, i) => (
              <ScrollReveal key={member.name} delay={0.05 + i * 0.05}>
                <li className="mx-auto w-full max-w-[360px] sm:max-w-none">
                  <figure className="plate aspect-[4/5] w-full">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at RHDevs`}
                      width={400}
                      height={500}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-rule pt-4">
                    <h4 className="font-display text-h4 font-extrabold leading-tight text-paper">
                      {member.name}
                    </h4>
                    <p className="text-sm text-paper-muted">{member.department}</p>
                  </div>
                  <p className="mt-1 text-sm text-paper-faint">{member.role}</p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

