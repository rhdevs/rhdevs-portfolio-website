import { ScrollReveal } from "@/components/ScrollReveal";
import teamHead from "@/assets/team-head.jpg";
import teamEng1 from "@/assets/team-eng1.jpg";
import teamEng2 from "@/assets/team-eng2.jpg";
import teamDesign from "@/assets/team-design.jpg";

const engineeringHeads = [
  { name: "Zhiyuan", image: teamEng1 },
  { name: "Ram", image: teamEng2 },
];

const designHeads = [
  { name: "Aksh Bhatia", image: teamDesign },
];

export function TeamTitleSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="text-center">
        <ScrollReveal>
          <div className="relative inline-block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <p className="relative mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Our People
            </p>
            <h2 className="relative text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Meet the Team
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            The people behind RHDevs
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TeamHeadSection() {
  return (
    <section className="snap-section relative flex items-center justify-center px-6">
      <div className="text-center">
        <ScrollReveal>
          <div className="relative inline-block">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={teamHead}
              alt="Head of RHDevs"
              width={400}
              height={400}
              className="relative h-64 w-64 rounded-[3rem] object-cover glow-border sm:h-80 sm:w-80 md:h-96 md:w-96 shadow-2xl"
            />
          </div>
          <h3 className="mt-10 mx-auto max-w-[800px] text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">Patrick Steve Harrison</h3>
          <p className="mt-4 text-lg font-bold tracking-widest text-primary uppercase">
            Head of RHDevs
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TeamMembersSection() {
  return (
    <section className="snap-section relative flex flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        
        <div className="grid gap-y-28 lg:grid-cols-3 lg:gap-x-24 xl:gap-x-32">
          
          {/* ENGINEERING HEADS */}
          <div className="lg:col-span-2 relative flex flex-col items-center justify-start">
            <ScrollReveal delay={0.1}>
               <h4 className="mb-10 lg:mb-14 text-lg sm:text-xl md:text-2xl tracking-[0.4em] uppercase text-primary font-bold text-center">Engineering Heads</h4>
            </ScrollReveal>
            
            <div className="flex flex-col sm:flex-row justify-center w-full gap-12 sm:gap-16">
              {engineeringHeads.map((member, i) => (
                <ScrollReveal key={`eng-${i}`} delay={0.2 + i * 0.1}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <img
                        src={member.image}
                        alt={member.name}
                        width={320}
                        height={320}
                        loading="lazy"
                        className="relative h-56 w-56 rounded-[2.5rem] object-cover glow-border transition-transform duration-300 group-hover:scale-[1.03] sm:h-64 sm:w-64 xl:h-72 xl:w-72 shadow-xl"
                      />
                    </div>
                    <h3 className="mt-8 text-2xl font-black tracking-tight sm:text-3xl xl:text-4xl">{member.name}</h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Vertical Divider for Desktop */}
            <div className="hidden lg:block absolute -right-12 xl:-right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            
            {/* Horizontal Divider for Mobile/Tablet */}
            <div className="flex w-full justify-center lg:hidden mt-28">
              <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          </div>

          {/* DESIGN HEAD */}
          <div className="lg:col-span-1 relative flex flex-col items-center lg:justify-start lg:mt-0">
             <ScrollReveal delay={0.4}>
               <h4 className="mb-10 lg:mb-14 text-lg sm:text-xl md:text-2xl tracking-[0.4em] uppercase text-primary font-bold text-center">Design Head</h4>
             </ScrollReveal>

             {designHeads.map((member, i) => (
                <ScrollReveal key={`design-${i}`} delay={0.5}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <img
                        src={member.image}
                        alt={member.name}
                        width={320}
                        height={320}
                        loading="lazy"
                        className="relative h-56 w-56 rounded-[2.5rem] object-cover glow-border transition-transform duration-300 group-hover:scale-[1.03] sm:h-64 sm:w-64 xl:h-72 xl:w-72 shadow-xl"
                      />
                    </div>
                    <h3 className="mt-8 text-2xl font-black tracking-tight sm:text-3xl xl:text-4xl">{member.name}</h3>
                  </div>
                </ScrollReveal>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}
