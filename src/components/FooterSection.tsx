import { ScrollReveal } from "@/components/ScrollReveal";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";

const links = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border/40 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-tight">
                <span className="text-gradient">RH</span>
                <span className="inline-block w-2" />
                Devs
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Building future-ready creators, leaders, and problem-solvers.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Connect With Us
              </p>
              <div className="flex gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 border-t border-border/30 pt-6">
          <p className="text-center text-xs text-muted-foreground/60">
            © 2026 RHDevs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
