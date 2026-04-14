import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Star, Zap } from "lucide-react";

interface Milestone {
  title: string;
  description: string;
  flagship?: boolean;
}

const milestones: Milestone[] = [
  { title: "No-Code, Big Ideas", description: "A beginner-friendly workshop showing how students can bring ideas to life without writing code using no-code and AI-assisted tools." },
  { title: "AI for School Survival", description: "A practical workshop on using AI tools to support student life, studying, planning, and productivity." },
  { title: "Design Your Digital Alter Ego", description: "A creative workshop where participants use AI tools to imagine and design their digital identity or personal brand." },
  { title: "Future Jobs, Future Skills", description: "A forward-looking session on how AI is shaping careers, industries, and the skills students need for the future." },
  { title: "From Idea to Pitch", description: "A workshop designed to take members from a simple problem statement to a polished solution pitch using AI tools." },
  { title: "The AI Makers' Playground", description: "A casual, station-based experience where members rotate through different AI tools and explore what interests them most." },
  { title: "New Frontiers", description: "New Frontiers is RHDevs' flagship hackathon for the 2026/27 year, organised in collaboration with NUS StartIT Club and OpenAI. It is open to both coders and non-coders and focuses on innovation, creativity, AI, and interdisciplinary teamwork.", flagship: true },
];

function MilestoneNode({ milestone, index, total }: { milestone: Milestone; index: number; total: number }) {
  const [hovered, setHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <ScrollReveal delay={0.1}>
      <div className="snap-section relative flex items-center justify-center px-6">
        {/* Continuous white trunk line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/40" />

        <div className="relative flex items-center justify-center w-full max-w-5xl">
          {/* Node dot */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10">
            <div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                milestone.flagship
                  ? "bg-primary border-primary shadow-[0_0_12px_hsl(0_0%_96%/0.3)]"
                  : hovered
                    ? "bg-primary border-primary"
                    : "bg-background border-primary/50"
              }`}
            />
            {/* Branch line connecting dot to content */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 h-px bg-primary/40 ${
                isLeft ? "right-full w-20 sm:w-28 md:w-36" : "left-full w-20 sm:w-28 md:w-36"
              }`}
            />
          </div>

          {/* Title side */}
          <div
            className={`w-5/12 ${isLeft ? "mr-auto text-right pr-12 sm:pr-20 md:pr-28" : "ml-auto text-left pl-12 sm:pl-20 md:pl-28"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {milestone.flagship && (
              <div className={`flex items-center gap-1.5 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Flagship
                </span>
              </div>
            )}
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight cursor-default transition-colors duration-300 ${
                milestone.flagship ? "text-glow-sm" : hovered ? "text-glow-sm" : ""
              }`}
            >
              {milestone.title}
            </h3>
            {milestone.flagship && (
              <Star className="inline-block w-4 h-4 text-primary mt-2" />
            )}
          </div>

          {/* Info side — always visible on the opposite side */}
          <div
            className={`w-5/12 ${isLeft ? "ml-auto text-left pl-12 sm:pl-20 md:pl-28" : "mr-auto text-right pr-12 sm:pr-20 md:pr-28"}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
                <div className={`mt-3 flex items-center gap-2 ${isLeft ? "justify-start" : "justify-end"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${milestone.flagship ? "bg-primary" : "bg-muted-foreground/40"}`} />
                  <span className="text-xs text-muted-foreground/50 font-mono">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function MilestonesTitleSection() {
  return (
    <section id="milestones" className="snap-section relative flex items-center justify-center px-6">
      {/* Trunk line starts here */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 bottom-0 w-px bg-primary/40" />
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative text-center">
        <ScrollReveal>
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-8 h-px bg-primary/60" />
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground text-glow-subtle">
              Roadmap
            </p>
            <div className="w-8 h-px bg-primary/60" />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-glow">
            26/27 Milestones
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A look at RHDevs' key workshops, experiences, and flagship events
            for the 2026/27 journey.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function MilestoneScreen({ index }: { index: number }) {
  return (
    <MilestoneNode
      milestone={milestones[index]}
      index={index}
      total={milestones.length}
    />
  );
}

export const milestoneCount = milestones.length;
