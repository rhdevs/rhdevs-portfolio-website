import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";
import startitLogo from "@/assets/startit_logo.jpg";
import openaiLogo from "@/assets/openai_logo.jpg";

interface Milestone {
  title: string;
  description: string;
  flagship?: boolean;
}

const milestones: Milestone[] = [
  {
    title: "No-Code, Big Ideas",
    description:
      "No Code, Big Ideas is a beginner-friendly workshop that introduces students to the world of no-code creation. Using intuitive platforms and AI-assisted tools, participants will learn how to transform ideas into simple apps, prototypes, and digital experiences — no programming required."
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
    title: "New Frontiers Hackathon",
    description:
      "New Frontiers is RHDevs' flagship hackathon for the 2026/27 year, organised in collaboration with NUS StartIT Club and OpenAI. It is open to both coders and non-coders and focuses on innovation, creativity, AI, and interdisciplinary teamwork.",
    flagship: true,
  },
];

export function MilestonesTitleSection() {
  return (
    <section id="milestones" className="snap-section relative flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-primary/80 to-transparent hidden md:block" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <div className="relative inline-block">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[80px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="relative mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-primary/80" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
              Roadmap
            </p>
            <div className="h-px w-12 bg-primary/80" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.1 }}
            style={{ transformPerspective: 1000 }}
            className="relative text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            26/27 Milestones
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl"
        >
          A look at RHDevs' key workshops, experiences, and flagship events
          for the 2026/27 journey.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function MilestoneScreen({ index }: { index: number }) {
  const milestone = milestones[index];

  return (
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Background vertical line */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-px -translate-x-1/2 bg-primary/10 md:block" />

      {/* Animated glowing vertical line */}
      <motion.div
        initial={{ height: "0%" }}
        whileInView={{ height: "100%" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="pointer-events-none absolute left-1/2 top-0 z-0 hidden w-px -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-primary md:block"
      />

      {/* Massive subtle background number */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[30vw] font-black text-white/[0.02]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <article className="relative z-10 flex w-full max-w-4xl flex-col items-center">

        {/* 1. THE TOP NODE DOT */}
        <div className="relative flex h-24 w-24 items-center justify-center bg-background rounded-full mb-8 z-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className={`absolute h-10 w-10 animate-ping rounded-full ${milestone.flagship ? "bg-primary/30" : "bg-primary/10"}`}
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className={`relative h-6 w-6 rounded-full border-4 ${milestone.flagship ? "shadow-[0_0_20px_rgba(255,255,255,1)] border-primary bg-white" : "shadow-[0_0_10px_rgba(255,255,255,0.5)] border-primary bg-background"}`}
          />
        </div>

        {/* CONTAINER FOR TITLE AND DESC WITH MASK TO HIDE THE LINE */}
        <div className="relative z-10 pb-16 pt-4 px-4 bg-background w-[110%] md:w-[130%] max-w-5xl [box-shadow:0_0_60px_60px_hsl(0,0%,3%)] flex flex-col items-center">

          {/* 2. THE BIG TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="flex flex-col items-center max-w-4xl"
          >
            {milestone.flagship && (
              <div className="mb-6 flex items-center justify-center gap-2">
                <Zap className="h-6 w-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-primary" />
                <span className="text-base font-bold uppercase tracking-[0.4em] text-primary">
                  Flagship
                </span>
              </div>
            )}

            <h3 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl text-center leading-[1.1]">
              {milestone.title}
            </h3>

            {milestone.flagship && (
              <Star className="mt-8 h-8 w-8 text-primary" />
            )}
          </motion.div>

          {/* 3. THE EXPLANATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 }}
            className="mt-10 md:mt-16 w-full max-w-3xl"
          >
            <div className="relative text-center">

              <p className="text-lg md:text-2xl font-medium leading-[1.6] text-zinc-300">
                {milestone.description}
              </p>

              {/* COLLAB LOGOS (If New Frontiers) */}
              {milestone.flagship && milestone.title.startsWith("New Frontiers") && (
                <div className="mt-16 flex flex-col items-center justify-center gap-8">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">In Collaboration With</span>
                  <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
                    <img src={startitLogo} alt="NUS StartIT Logo" className="h-[150px] w-auto object-contain mix-blend-screen mix-blend-plus-lighter opacity-90" />
                    <span className="text-muted-foreground/30 font-light text-6xl">×</span>
                    <img src={openaiLogo} alt="OpenAI Logo" className="h-[200px] w-auto object-contain mix-blend-screen mix-blend-plus-lighter opacity-90" />
                  </div>
                </div>
              )}

              <div className="mt-16 flex items-center justify-center">
                <span className="text-lg font-mono font-bold tracking-[0.3em] text-white/30 bg-white/5 py-2 px-6 rounded-full">
                  PHASE {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </article>
    </section>
  );
}

export const milestoneCount = milestones.length;
