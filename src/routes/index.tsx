import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CohortSection } from "@/components/TeamSection";
import { ProgrammeSection } from "@/components/MilestonesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RHDevs — A student-led developer community at Raffles" },
      {
        name: "description",
        content:
          "RHDevs is a student-led developer community at Raffles. Cohort 26/27 runs seven workshops and the New Frontiers hackathon with OpenAI and NUS StartIT.",
      },
      {
        property: "og:title",
        content: "RHDevs — Developer community at Raffles",
      },
      {
        property: "og:description",
        content:
          "Seven workshops, one flagship hackathon, in partnership with OpenAI and NUS StartIT.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-ink text-paper">
      <HeroSection />
      <AboutSection />
      <CohortSection />
      <ProgrammeSection />
      <PartnersSection />
      <FooterSection />
    </main>
  );
}
