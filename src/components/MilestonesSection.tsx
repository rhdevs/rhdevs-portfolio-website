import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronDown, Star } from "lucide-react";

interface Milestone {
  title: string;
  description: string;
  flagship?: boolean;
}

const milestones: Milestone[] = [
  { title: "Prompt Like a Pro", description: "An interactive introduction to the art of prompting. This session helps members understand how to communicate effectively with AI tools to get clearer, more useful, and more creative results." },
  { title: "AI x Creativity Lab", description: "A hands-on creative session where members experiment with AI as a tool for ideation, design, and storytelling." },
  { title: "Build a Startup in 90 Minutes", description: "A fast-paced team challenge where participants use AI tools to create a startup idea from scratch and pitch it." },
  { title: "No-Code, Big Ideas", description: "A beginner-friendly workshop showing how students can bring ideas to life without writing code using no-code and AI-assisted tools." },
  { title: "AI for School Survival", description: "A practical workshop on using AI tools to support student life, studying, planning, and productivity." },
  { title: "Design Your Digital Alter Ego", description: "A creative workshop where participants use AI tools to imagine and design their digital identity or personal brand." },
  { title: "AI Mythbusters", description: "A discussion-based session exploring what AI can actually do, what it cannot do, and what people often misunderstand about it." },
  { title: "Create a Campaign with AI", description: "A collaborative workshop where teams use AI tools to build an awareness campaign around a meaningful cause or issue." },
  { title: "Future Jobs, Future Skills", description: "A forward-looking session on how AI is shaping careers, industries, and the skills students need for the future." },
  { title: "Human vs AI Creative Challenge", description: "An engaging challenge where teams compare human-only work, AI-assisted work, and hybrid work." },
  { title: "AI Escape Room", description: "A themed challenge where participants solve puzzles and complete tasks using logic, creativity, teamwork, and AI tools." },
  { title: "From Idea to Pitch", description: "A workshop designed to take members from a simple problem statement to a polished solution pitch using AI tools." },
  { title: "AI Story Studio", description: "A workshop where members use AI tools to create stories, characters, worlds, and visual concepts." },
  { title: "Reinvent the Ordinary", description: "Participants identify everyday problems and use AI tools to rethink and improve those experiences." },
  { title: "The AI Makers' Playground", description: "A casual, station-based experience where members rotate through different AI tools and explore what interests them most." },
  { title: "New Frontiers", description: "New Frontiers is RHDevs' flagship hackathon for the 2026/27 year, organised in collaboration with NUS StartIT Club and OpenAI. It is open to both coders and non-coders and focuses on innovation, creativity, AI, and interdisciplinary teamwork.", flagship: true },
];

function MilestoneItem({ milestone, index }: { milestone: Milestone; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={Math.min(index * 0.04, 0.4)}>
      <div className="relative flex gap-4 sm:gap-6">
        <div className="flex flex-col items-center">
          <div
            className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
              milestone.flagship
                ? "bg-primary shadow-[0_0_12px] shadow-primary"
                : "bg-border group-hover:bg-primary/50"
            } transition-colors`}
          />
          {index < milestones.length - 1 && (
            <div className="w-px flex-1 bg-border/50" />
          )}
        </div>

        <div className="pb-8 flex-1">
          <button
            onClick={() => setOpen(!open)}
            className={`w-full text-left group rounded-xl p-4 sm:p-5 transition-all duration-300 ${
              milestone.flagship
                ? "bg-primary/5 glow-border hover:bg-primary/10"
                : "bg-card/30 border border-border/50 hover:bg-card/60 hover:border-border"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {milestone.flagship && (
                  <Star className="w-4 h-4 text-primary flex-shrink-0" />
                )}
                <h3
                  className={`font-semibold text-sm sm:text-base ${
                    milestone.flagship ? "text-primary" : "text-foreground"
                  }`}
                >
                  {milestone.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </motion.div>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function MilestonesSection() {
  return (
    <section id="milestones" className="snap-section relative px-6 py-20 overflow-y-auto">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            26/27 Milestones
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            A look at RHDevs' key workshops, experiences, and flagship events
            for the 2026/27 journey — designed to make technology, creativity,
            and innovation accessible to everyone.
          </p>
        </ScrollReveal>

        <div className="mt-14">
          {milestones.map((milestone, i) => (
            <MilestoneItem key={milestone.title} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
