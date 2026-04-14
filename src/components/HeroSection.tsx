import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function HeroSection() {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Student-Led Development CCA
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative mt-8 inline-flex items-center justify-center">
            <div className="pointer-events-none absolute h-36 w-72 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="relative text-6xl font-bold leading-none tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="text-gradient">RH</span>
              <span className="inline-block w-4 sm:w-6 md:w-8" />
              <span className="text-foreground">Devs</span>
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 text-lg font-light tracking-wide text-muted-foreground sm:text-xl">
            Learn. Build. Innovate.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground/75 sm:text-base">
            Building future-ready creators, leaders, and problem-solvers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 flex justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#about">Explore</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#milestones">Milestones</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
      </div>
    </section>
  );
}
