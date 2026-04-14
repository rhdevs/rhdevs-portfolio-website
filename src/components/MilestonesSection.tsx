import { ScrollReveal } from "@/components/ScrollReveal";
import { Star, Zap } from "lucide-react";

interface Milestone {
  title: string;
  description: string;
  flagship?: boolean;
}

const milestones: Milestone[] = [
  {
    title: "No-Code, Big Ideas",
    description:
      "A beginner-friendly workshop showing how students can bring ideas to life without writing code using no-code and AI-assisted tools.",
  },
  {
    title: "AI for School Survival",
    description:
      "A practical workshop on using AI tools to support student life, studying, planning, and productivity.",
  },
  {
    title: "Design Your Digital Alter Ego",
    description:
      "A creative workshop where participants use AI tools to imagine and design their digital identity or personal brand.",
  },
  {
    title: "Future Jobs, Future Skills",
    description:
      "A forward-looking session on how AI is shaping careers, industries, and the skills students need for the future.",
  },
  {
    title: "From Idea to Pitch",
    description:
      "A workshop designed to take members from a simple problem statement to a polished solution pitch using AI tools.",
  },
  {
    title: "The AI Makers' Playground",
    description:
      "A casual, station-based experience where members rotate through different AI tools and explore what interests them most.",
  },
  {
    title: "New Frontiers",
    description:
      "New Frontiers is RHDevs' flagship hackathon for the 2026/27 year, organised in collaboration with NUS StartIT Club and OpenAI. It is open to both coders and non-coders and focuses on innovation, creativity, AI, and interdisciplinary teamwork.",
    flagship: true,
  },
];

export function MilestonesTitleSection() {
  return (
    <section id="milestones" className="snap-section relative flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-1/2 hidden w-px -translate-x-1/2 bg-primary/55 md:block" />

      <div className="relative text-center">
        <ScrollReveal>
          <div className="relative inline-block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary/60" />
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Roadmap
              </p>
              <div className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="relative text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              26/27 Milestones
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A look at RHDevs' key workshops, experiences, and flagship events
            for the 2026/27 journey.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function MilestoneScreen({ index }: { index: number }) {
  const milestone = milestones[index];
  const isLeft = index % 2 === 0;

  return (
    <section className="snap-section relative flex items-center px-6">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-primary/55 md:block" />

      <article className="relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-14">
        <div className={isLeft ? "md:pr-16 md:text-right" : "md:order-3 md:pl-16 md:text-left"}>
          <ScrollReveal direction={isLeft ? "right" : "left"}>
            {milestone.flagship && (
              <div className={`mb-3 flex items-center gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Flagship
                </span>
              </div>
            )}

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {milestone.title}
            </h3>

            {milestone.flagship && (
              <Star className={`mt-4 h-5 w-5 text-primary ${isLeft ? "md:ml-auto" : ""}`} />
            )}
          </ScrollReveal>
        </div>

        <div className="relative hidden h-20 w-20 items-center justify-center md:flex">
          <div className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-full -translate-y-1/2 bg-primary/55" />
          <div className="absolute left-1/2 top-1/2 h-px w-10 -translate-y-1/2 bg-primary/55" />
          <div className={`relative h-4 w-4 rounded-full border-2 ${milestone.flagship ? "border-primary bg-primary" : "border-primary/80 bg-background"}`} />
        </div>

        <div className={isLeft ? "md:pl-16" : "md:order-1 md:pr-16"}>
          <ScrollReveal direction={isLeft ? "left" : "right"} delay={0.08}>
            <div className="rounded-3xl border border-border/80 bg-card/72 p-6 glow-border sm:p-8">
              <p className={`text-sm leading-relaxed text-muted-foreground sm:text-base ${!isLeft ? "md:text-right" : ""}`}>
                {milestone.description}
              </p>
              <div className={`mt-5 flex items-center gap-2 ${isLeft ? "justify-start" : "md:justify-end"}`}>
                <div className={`h-1.5 w-1.5 rounded-full ${milestone.flagship ? "bg-primary" : "bg-primary/45"}`} />
                <span className="text-xs font-mono text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </section>
  );
}

export const milestoneCount = milestones.length;
