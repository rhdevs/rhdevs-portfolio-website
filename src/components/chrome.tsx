import type { CSSProperties } from "react";
import { site, contact } from "@/content";
import { Logo } from "./primitives";

type Page = "home" | "new-frontiers" | "other";

export function Header({ page }: { page: Page }) {
  const home = page === "home" ? "" : "/";
  const links = [
    { href: `${home}#work`, label: "Work" },
    { href: `${home}#how-we-work`, label: "How we work" },
    { href: `${home}#team`, label: "Team" },
    { href: "/new-frontiers", label: "New Frontiers", current: page === "new-frontiers" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="shell flex h-[4.75rem] items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3.5 text-[1.375rem] font-semibold tracking-[-0.03em]">
          <Logo />
          <span>RHDevs</span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden items-center gap-7 text-[0.95rem] text-fg-2 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={l.current ? "page" : undefined}
                  className="transition-colors duration-200 hover:text-fg aria-[current=page]:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={`${home}#contact`} className="btn btn-solid min-h-10 px-4 text-[0.95rem]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid-12 gap-y-10 pt-14">
        <p className="col-span-12 max-w-[42ch] text-fg-2 md:col-span-6">
          A {site.memberCount}-person student engineering and design team at {site.hall},{" "}
          {site.university}.
        </p>

        <nav aria-label="Footer" className="col-span-6 md:col-span-3">
          <p className="label">Site</p>
          <ul className="mt-3 space-y-2">
            <li><a className="link" href="/#work">Work</a></li>
            <li><a className="link" href="/#how-we-work">How we work</a></li>
            <li><a className="link" href="/#team">Team</a></li>
            <li><a className="link" href="/new-frontiers">New Frontiers</a></li>
          </ul>
        </nav>

        <div className="col-span-6 md:col-span-3">
          <p className="label">Contact</p>
          <ul className="mt-3 space-y-2">
            <li><a className="link" href={contact.telegramUrl}>Telegram</a></li>
            <li><a className="link" href={`mailto:${contact.email}`}>Email</a></li>
            <li><a className="link" href={contact.linkedinUrl}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* The name closes the page at full width. Decorative: the logo link above already names it. */}
      <div className="shell mt-16 flex items-end justify-between gap-6 pb-6">
        <p
          aria-hidden
          className="rise -ml-[0.05em] select-none text-[clamp(4.5rem,1rem+17vw,22rem)] font-semibold leading-[0.78] tracking-[-0.07em] text-muted"
        >
          {"RHDevs".split("").map((ch, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties}>{ch}</span>
          ))}
        </p>
        <p className="label shrink-0 pb-[0.4em]">© 2026</p>
      </div>
    </footer>
  );
}
