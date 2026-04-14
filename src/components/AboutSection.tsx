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
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Who we are
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            RHDevs is a student-led development CCA dedicated to nurturing
            interest in technology, coding, design, AI, and innovation. It
            provides members with opportunities to learn, collaborate, and
            create through hands-on experiences, meaningful projects, and a
            supportive community.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.1}>
              <div className="group p-6 rounded-xl bg-card/50 glow-border hover:bg-card/80 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
