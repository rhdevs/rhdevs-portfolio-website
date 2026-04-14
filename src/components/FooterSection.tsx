import { ScrollReveal } from "@/components/ScrollReveal";
import { Instagram, Github, Mail, MessageCircle } from "lucide-react";

const links = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="snap-section relative flex flex-col justify-center px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto w-full py-20">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-glow-sm">
                <span className="text-gradient">RH</span>
                <span className="inline-block w-2" />
                Devs
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                Building future-ready creators, leaders, and problem-solvers.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4 text-glow-subtle">
                Connect With Us
              </p>
              <div className="flex gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60 text-center">
            © 2026 RHDevs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
