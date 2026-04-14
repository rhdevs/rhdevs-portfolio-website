import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronDown, Star, Zap } from "lucide-react";

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
  const num = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal delay={Math.min(index * 0.03, 0.3)}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left group relative transition-all duration-300 ${
          milestone.flagship
            ? "py-6 px-6 sm:px-8 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/10"
            : "py-5 border-b border-border/40 hover:border-border"
        }`}
      >
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Number */}
          <span
            className={`text-xs font-mono tracking-wider flex-shrink-0 ${
              milestone.flagship ? "text-primary" : "text-muted-foreground/40"
            }`}
          >
            {num}
          </span>

          {/* Title */}
          <div className="flex-1 flex items-center gap-3 min-w-0">
            {milestone.flagship && (
              <Star className="w-5 h-5 text-primary flex-shrink-0" />
            )}
            <h3
              className={`font-semibold truncate transition-colors duration-200 ${
                milestone.flagship
                  ? "text-primary text-lg sm:text-xl"
                  : "text-foreground text-base sm:text-lg group-hover:text-primary"
              }`}
            >
              {milestone.title}
            </h3>
          </div>

          {/* Expand icon */}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <ChevronDown
              className={`w-4 h-4 ${
                milestone.flagship ? "text-primary" : "text-muted-foreground"
              }`}
            />
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
              <p className="mt-4 ml-10 sm:ml-14 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {milestone.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flagship badge */}
        {milestone.flagship && (
          <div className="absolute -top-3 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3 h-3" />
            Flagship
          </div>
        )}
      </button>
    </ScrollReveal>
  );
}

export function MilestonesSection() {
  return (
    <section id="milestones" className="snap-section relative px-6 py-20 overflow-y-auto">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Roadmap
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            26/27 Milestones
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A look at RHDevs' key workshops, experiences, and flagship events
            for the 2026/27 journey — designed to make technology, creativity,
            and innovation accessible to everyone.
          </p>
        </ScrollReveal>

        <div className="mt-14 space-y-0">
          {milestones.map((milestone, i) => (
            <MilestoneItem key={milestone.title} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
