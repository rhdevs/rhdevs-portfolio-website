import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import startitLogo from "@/assets/startit_logo.jpg";
import openaiLogo from "@/assets/openai_logo.jpg";

interface ProgrammeItem {
  id: string;
  title: string;
  description: string;
  flagship?: boolean;
}

const programme: ProgrammeItem[] = [
  {
    id: "01",
    title: "No-Code, Big Ideas",
    description:
      "A beginner-friendly workshop that introduces students to the world of no-code creation. Participants use intuitive platforms and AI-assisted tools to turn ideas into apps, prototypes, and digital experiences. No programming required.",
  },
  {
    id: "02",
    title: "AI for School Survival",
    description:
      "A practical workshop on using AI tools to support student life: studying, planning, and productivity. Real workflows that members can adopt the next school day.",
  },
  {
    id: "03",
    title: "Design Your Digital Alter Ego",
    description:
      "A creative workshop where participants use AI tools to imagine and design a digital identity or personal brand. Output is a small published artefact, not a slide deck.",
  },
  {
    id: "04",
    title: "Future Jobs, Future Skills",
    description:
      "A forward-looking session on how AI is shaping careers, industries, and the skills students need to be employable across the next decade.",
  },
  {
    id: "05",
    title: "From Idea to Pitch",
    description:
      "A workshop that takes members from a problem statement to a polished pitch, using AI tools for research, structure, and delivery rehearsal.",
  },
  {
    id: "06",
    title: "The AI Makers' Playground",
    description:
      "A casual, station-based experience where members rotate through AI tools and find the ones that fit how they think. Low-stakes, high-curiosity.",
  },
  {
    id: "07",
    title: "New Frontiers Hackathon",
    description:
      "RHDevs' flagship hackathon for the 2026/27 year. Organised with NUS StartIT Club and OpenAI. Open to coders and non-coders. Focused on innovation, creativity, AI, and interdisciplinary teamwork.",
    flagship: true,
  },
];

export function ProgrammeSection() {
  const [openId, setOpenId] = useState<string | null>("07");

  return (
    <section
      id="programme"
      className="relative bg-ink py-[clamp(6rem,2rem+8vw,12rem)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10">
        <ScrollReveal>
          <div className="grid gap-y-6 border-b border-rule pb-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7">
              <p className="section-label">Nº 03 — Programme</p>
              <h2 className="mt-3 font-display text-h2 font-extrabold text-paper">
                The 26 / 27 programme
              </h2>
            </div>
            <p className="text-paper-muted measure-prose lg:col-span-5 lg:text-right">
              Seven workshops across the academic year, building toward one
              flagship hackathon. Open to coders and non-coders alike.
            </p>
          </div>
        </ScrollReveal>

        <ol className="mt-2">
          {programme.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <ProgrammeRow
                key={item.id}
                index={i}
                item={item}
                open={isOpen}
                onToggle={() => setOpenId(isOpen ? null : item.id)}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
}

interface RowProps {
  index: number;
  item: ProgrammeItem;
  open: boolean;
  onToggle: () => void;
}

function ProgrammeRow({ item, open, onToggle }: RowProps) {
  const numeralColor = item.flagship ? "text-oxblood" : "text-paper";

  return (
    <ScrollReveal delay={0.02}>
      <li
        className={[
          "group border-b",
          item.flagship ? "border-oxblood/70" : "border-rule",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`programme-${item.id}`}
          className="grid w-full grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-4 py-7 text-left sm:grid-cols-[5rem_1fr_auto] sm:gap-x-8 sm:py-9"
        >
          <span
            className={`font-display text-h3 font-extrabold leading-none ${numeralColor} tabular`}
            data-numeric
          >
            {item.id}
          </span>

          <span className="flex flex-col gap-1">
            {item.flagship && (
              <span className="section-label text-oxblood">★ Flagship</span>
            )}
            <span className="font-display text-h3 font-extrabold leading-tight text-paper">
              {item.title}
            </span>
          </span>

          <span
            aria-hidden
            className={[
              "section-label transition-transform duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
              item.flagship ? "text-oxblood" : "text-paper-muted",
              open ? "rotate-45" : "rotate-0",
            ].join(" ")}
          >
            +
          </span>
        </button>

        <div
          id={`programme-${item.id}`}
          className={[
            "grid overflow-hidden transition-[grid-template-rows] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ].join(" ")}
        >
          <div className="min-h-0">
            <div className="grid gap-y-8 pb-10 lg:grid-cols-[5rem_1fr_auto] lg:gap-x-8 lg:pb-12">
              <div className="hidden lg:block" />
              <div>
                <p className="text-lead measure-prose text-paper">
                  {item.description}
                </p>
                {item.flagship && (
                  <div className="mt-10 border-t border-rule pt-6">
                    <p className="section-label">In partnership with</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
                      <img
                        src={startitLogo}
                        alt="NUS StartIT Club"
                        className="h-12 w-auto logo-knockout"
                      />
                      <span className="font-display text-h4 text-paper-faint">×</span>
                      <img
                        src={openaiLogo}
                        alt="OpenAI"
                        className="h-12 w-auto logo-knockout"
                      />
                    </div>
                  </div>
                )}
              </div>
              <p className="section-label lg:text-right">
                {item.flagship ? "Hackathon" : "Workshop"}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ScrollReveal>
  );
}
