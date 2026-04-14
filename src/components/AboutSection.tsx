import { ScrollReveal } from "@/components/ScrollReveal";
import { Code, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Mission",
    description:
      "To equip students with technical skills, project experience, and a collaborative mindset through workshops, team projects, and innovation-driven activities.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description:
      "To be a leading student tech community that develops future-ready creators, leaders, and problem-solvers.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "A supportive environment where members learn, collaborate, and create through hands-on experiences and meaningful projects.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="snap-section relative flex items-center px-6">
      <div className="mx-auto w-full max-w-5xl py-20">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            About Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Who we are
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            RHDevs is a student-led development CCA dedicated to nurturing
            interest in technology, coding, design, AI, and innovation. It
            provides members with opportunities to learn, collaborate, and
            create through hands-on experiences, meaningful projects, and a
            supportive community.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.12 + i * 0.08}>
              <div className="rounded-2xl border border-border/70 bg-card/60 p-6 transition-colors duration-300 hover:bg-card/80 glow-border">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
