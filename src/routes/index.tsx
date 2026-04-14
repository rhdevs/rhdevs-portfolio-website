import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { MilestonesSection } from "@/components/MilestonesSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RHDevs — Learn. Build. Innovate." },
      {
        name: "description",
        content:
          "RHDevs is a student-led development CCA focused on technology, innovation, AI, and creativity.",
      },
      { property: "og:title", content: "RHDevs — Learn. Build. Innovate." },
      {
        property: "og:description",
        content:
          "Building future-ready creators, leaders, and problem-solvers.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <MilestonesSection />
      <FooterSection />
    </main>
  );
}
