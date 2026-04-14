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

export function TeamHeadSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Our People
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Meet the Team
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-16 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={teamHead}
                alt="Head of RHDevs"
                width={180}
                height={180}
                className="relative w-44 h-44 rounded-full object-cover glow-border"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Head of RHDevs</h3>
            <p className="text-sm text-muted-foreground font-medium mt-1">
              Head of RHDevs
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TeamMembersSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.role}
                    width={140}
                    height={140}
                    loading="lazy"
                    className="relative w-36 h-36 rounded-full object-cover glow-border group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold">{member.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
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
