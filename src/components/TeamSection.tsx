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
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 text-glow-subtle">
            Our People
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-glow">
            Meet the Team
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-glow-subtle">
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
          <div className="relative group inline-block">
            <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={teamHead}
              alt="Head of RHDevs"
              width={280}
              height={280}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover glow-border"
            />
          </div>
          <h3 className="mt-8 text-2xl sm:text-3xl font-bold text-glow-sm">Head of RHDevs</h3>
          <p className="text-base text-muted-foreground font-medium mt-2 text-glow-subtle">
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
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12 sm:gap-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.role}
                    width={220}
                    height={220}
                    loading="lazy"
                    className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover glow-border group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-glow-sm">{member.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 text-glow-subtle">
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
