import { ScrollReveal } from "@/components/ScrollReveal";
import logo from "@/assets/logo.png";

interface FooterLink {
  label: string;
  href: string;
}

const links: FooterLink[] = [
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Email", href: "mailto:hello@rhdevs.org" },
  { label: "Discord", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-rule bg-ink-sunk">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10">
        <ScrollReveal>
          <div className="grid gap-y-12 py-[clamp(4rem,1rem+6vw,7rem)] lg:grid-cols-12 lg:gap-x-12">
            {/* Wordmark + closing line */}
            <div className="lg:col-span-6">
              <a href="#" className="inline-flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-8" />
                <span className="font-display text-h4 font-extrabold tracking-tight text-paper">
                  RH<span className="text-oxblood">·</span>Developers
                </span>
              </a>
              <p className="mt-6 measure-narrow text-paper-muted">
                A student-led developer community at Raffles. Cohort 26 / 27.
              </p>
              <p className="mt-10 section-label">
                Reach out for partnership, recruitment, or press
              </p>
            </div>

            {/* Links */}
            <nav aria-label="Connect" className="lg:col-span-4">
              <p className="section-label">Connect</p>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="underline-grow font-display text-h4 font-bold text-paper inline-flex items-baseline gap-2"
                    >
                      {link.label}
                      <span aria-hidden className="text-paper-muted">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Colophon */}
            <div className="lg:col-span-2">
              <p className="section-label">Colophon</p>
              <p className="mt-5 text-sm text-paper-muted">
                Set in <span className="text-paper">Cabinet Grotesk</span> and{" "}
                <span className="text-paper">General Sans</span>. Built with React and TanStack.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3 border-t border-rule py-6 text-sm text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RHDevs. Raffles, Singapore.</p>
          <p className="tabular">Cohort 26 / 27 — Index v2</p>
        </div>
      </div>
    </footer>
  );
}
