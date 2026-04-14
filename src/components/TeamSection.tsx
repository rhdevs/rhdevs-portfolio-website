import { ScrollReveal } from "@/components/ScrollReveal";
import teamHead from "@/assets/team-head.jpg";
import teamEng1 from "@/assets/team-eng1.jpg";
import teamEng2 from "@/assets/team-eng2.jpg";
import teamDesign from "@/assets/team-design.jpg";

const teamMembers = [
  { name: "Engineering Head", role: "Engineering Head", image: teamEng1 },
  { name: "Engineering Head", role: "Engineering Head", image: teamEng2 },
  { name: "Design Head", role: "Design Head", image: teamDesign },
];

export function TeamTitleSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="text-center">
        <ScrollReveal>
          <div className="relative inline-block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <p className="relative mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Our People
            </p>
            <h2 className="relative text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Meet the Team
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            The people behind RHDevs
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TeamHeadSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="text-center">
        <ScrollReveal>
          <div className="relative inline-block">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={teamHead}
              alt="Head of RHDevs"
              width={280}
              height={280}
              className="relative h-56 w-56 rounded-full object-cover glow-border sm:h-64 sm:w-64 md:h-72 md:w-72"
            />
          </div>
          <h3 className="mt-8 text-2xl font-bold sm:text-3xl">Head of RHDevs</h3>
          <p className="mt-2 text-base font-medium text-muted-foreground">
            Head of RHDevs
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TeamMembersSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={member.image}
                    alt={member.role}
                    width={220}
                    height={220}
                    loading="lazy"
                    className="relative h-44 w-44 rounded-full object-cover glow-border transition-transform duration-300 group-hover:scale-[1.03] sm:h-48 sm:w-48 md:h-52 md:w-52"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold sm:text-2xl">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
