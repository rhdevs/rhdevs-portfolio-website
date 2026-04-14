import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamTitleSection, TeamHeadSection, TeamMembersSection } from "@/components/TeamSection";
import { MilestonesSection } from "@/components/MilestonesSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RH Devs — Learn. Build. Innovate." },
      {
        name: "description",
        content:
          "RHDevs is a student-led development CCA focused on technology, innovation, AI, and creativity.",
      },
      { property: "og:title", content: "RH Devs — Learn. Build. Innovate." },
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
    <main className="snap-container">
      <HeroSection />
      <AboutSection />
      <TeamTitleSection />
      <TeamHeadSection />
      <TeamMembersSection />
      <MilestonesSection />
      <FooterSection />
    </main>
  );
}
