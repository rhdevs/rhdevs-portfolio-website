import type { CSSProperties, ReactNode } from "react";
import { contact, cohort, leaders, newFrontiers, products, recruitment, site } from "@/content";
import type { Leader, Product } from "@/content";
import { Footer, Header } from "@/components/chrome";
import { ArrowRight, ArrowUpRight, Label, Marquee, Portrait, Reveal, RiseText, SectionHead } from "@/components/primitives";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";
import { BrowserFrame, PhoneFrame } from "@/components/Devices";
import { CoOrganisers } from "@/components/CoOrganisers";

export function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header page="home" />
      <main id="main">
        <Hero />
        <Marquee
          label="What we maintain"
          items={products.map((p) => ({ name: p.name, note: p.metric ? `${p.metric.value} ${p.metric.short}` : p.kind }))}
        />
        <Proof />
        <Products />
        <NewFrontiersTeaser />
        <HowWeWork />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */

const HEADLINE = "We build the software Raffles Hall runs on.";

function Hero() {
  const find = (id: string) => products.find((p) => p.id === id);
  const rhapp = find("rhapp");
  const desktop = rhapp?.overview ?? rhapp?.screenshot;
  const finance = find("finance-bot")?.phone;
  const heartfelt = find("heartfelt-bot")?.phone;

  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip">
      <div className="shell grid-12 items-center gap-y-14 pb-[clamp(3.5rem,2rem+4vw,6rem)] pt-[clamp(2rem,1rem+3.5vw,4.5rem)] lg:min-h-[min(calc(100svh-4rem),62rem)]">
        <div className="col-span-12 lg:col-span-6">
          <h1 id="hero-title" className="text-hero max-w-[12ch]">
            <RiseText text={HEADLINE} />
          </h1>
          <p className="text-lead mt-8 max-w-[30ch]">Used by about 600 residents. Endorsed by the JCRC and hall admin.</p>
          <p className="mt-4 max-w-[44ch] text-fg-2">
            RHDevs is a {site.memberCount}-person student engineering and design team at {site.hall},{" "}
            {site.university}.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-solid">
              See what we've shipped <ArrowRight />
            </a>
            <a href="/new-frontiers" className="btn btn-ghost">
              New Frontiers hackathon <ArrowRight />
            </a>
          </div>
        </div>

        {/*
          The stage: RHApp's browser window on a tone panel, and the two bots
          standing in front of it as phones.
        */}
        {desktop && finance && heartfelt && rhapp?.urlLabel && (
          <figure className="col-span-12 lg:col-span-6" data-parallax>
            <div className="relative aspect-[16/13]">
              {/* Tone panel; everything sits inside the column, nothing leaves the page. */}
              <div className="absolute inset-y-0 left-[8%] right-0 bg-raised" />
              <div
                className="float right-[5%] top-[7%] w-[84%]"
                style={{ "--depth": -0.03, "--in": "200ms", "--from-o": 1 } as CSSProperties}
              >
                <BrowserFrame shot={desktop} url={rhapp.urlLabel} priority sizes="(min-width: 1024px) 42vw, 84vw" />
              </div>
              <div
                className="float bottom-[3%] left-0 w-[26%]"
                style={{ "--depth": -0.07, "--rot": "-2deg", "--in": "450ms" } as CSSProperties}
              >
                <PhoneFrame shot={finance} sizes="(min-width: 1024px) 14vw, 27vw" />
              </div>
              <div
                className="float bottom-0 left-[23%] w-[26%]"
                style={{ "--depth": -0.12, "--rot": "2deg", "--in": "600ms" } as CSSProperties}
              >
                <PhoneFrame shot={heartfelt} sizes="(min-width: 1024px) 14vw, 27vw" />
              </div>
            </div>
            <figcaption className="label mt-6 flex items-center gap-2.5">
              <span className="live-dot shrink-0" aria-hidden /> RHApp and two of our Telegram bots, in use at {site.hall}.
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

/** A number that counts up when it scrolls into view (client.ts). The final value is in the HTML. */
function N({ children }: { children: ReactNode }) {
  return (
    <span className="num text-fg" data-count>
      {children}
    </span>
  );
}

/** The proof, said as one sentence: the numbers carry it, the names link to the product. */
function Proof() {
  return (
    <section aria-label="Proof" className="bg-raised">
      <Reveal className="shell grid-12 gap-y-4 py-[clamp(3.5rem,2rem+4.5vw,7rem)]">
        <p className="label col-span-12 md:col-span-3 md:pt-[0.75em]">In use today</p>
        <p className="text-statement col-span-12 max-w-[30ch] text-fg-2 md:col-span-9">
          <N>~600</N> residents use{" "}
          <a href="#rhapp" className="link text-fg">RHApp</a>. <N>100%</N> of the hall's CCA claims run
          through the <a href="#finance-bot" className="link text-fg">Finance bot</a>, from <N>70+</N> CCA
          leaders.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ProductFacts({ product }: { product: Product }) {
  const rows = [
    { term: "Problem", value: product.problem },
    { term: "What it does", value: product.does },
    { term: "Who uses it", value: product.users },
  ].filter((r) => r.value);
  if (rows.length === 0) return null;
  return (
    <dl className="grid gap-5">
      {rows.map((r) => (
        <div key={r.term}>
          <dt className="label">{r.term}</dt>
          <dd className="mt-1">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Metric({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  if (!product.metric) return null;
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span
        className={`num leading-none ${
          size === "lg" ? "text-[clamp(3rem,2rem+3vw,5.5rem)]" : "text-[clamp(2.25rem,1.75rem+1.5vw,3.25rem)]"
        }`}
      >
        {product.metric.value}
      </span>
      <span className="text-fg-2">{product.metric.label}</span>
    </p>
  );
}

function Products() {
  const [rhapp, ...rest] = products;
  const withData = rest.filter((p) => p.does);
  const thin = rest.filter((p) => !p.does);

  return (
    <section aria-labelledby="work-title" id="work" className="section shell">
      <SectionHead
        id="work-title"
        label="Work"
        meta={`${products.length} products · all maintained`}
        title="Four products, shipped and still running."
      />

      <div className="mt-[var(--space-head)] grid-12 gap-y-[var(--col-gap)]">
        {/* RHApp leads: the largest card, with the live link. */}
        <Reveal as="article" className="card col-span-12 p-[var(--pad-card)]">
          <div id={rhapp.id} className="grid-12 scroll-mt-24 gap-y-10">
            <div className="col-span-12 flex flex-col gap-8 lg:col-span-5">
              <div>
                <Label>{rhapp.kind}</Label>
                <h3 className="mt-3 text-[clamp(2.75rem,1.75rem+3.5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                  {rhapp.name}
                </h3>
                {rhapp.url && (
                  <a href={rhapp.url} className="link mt-4 inline-flex items-center gap-2.5 font-mono text-sm">
                    <span className="live-dot" aria-hidden />
                    {rhapp.urlLabel} <ArrowUpRight />
                  </a>
                )}
              </div>
              <Metric product={rhapp} size="lg" />
              <ProductFacts product={rhapp} />
              {rhapp.endorsement && <p className="text-fg-2">{rhapp.endorsement}</p>}
              {rhapp.url && (
                <div className="mt-auto">
                  <a href={rhapp.url} className="btn btn-solid">
                    Open RHApp <ArrowUpRight />
                  </a>
                </div>
              )}
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScreenshotSlot product={rhapp} sizes="(min-width: 1024px) 55vw, 92vw" />
            </div>
          </div>
        </Reveal>

        {withData.map((p, i) => {
          const three = withData.length === 3;
          // Three cards: one row on desktop; at tablet the odd one out spans the row, image beside text.
          const wide = three && i === 2;
          const span = three ? `md:col-span-${wide ? 12 : 6} lg:col-span-4` : "md:col-span-6";
          return (
            <Reveal
              as="article"
              key={p.id}
              delay={i * 80}
              className={`card col-span-12 grid content-start gap-8 p-[var(--pad-card)] ${span} ${
                wide ? "md:grid-cols-2 lg:grid-cols-1" : ""
              }`}
            >
              <div id={p.id} className="scroll-mt-24">
                <ScreenshotSlot product={p} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw" />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <Label>{p.kind}</Label>
                  <h3 className="text-h3 mt-2">{p.name}</h3>
                </div>
                {p.screenshot && <Metric product={p} />}
                <ProductFacts product={p} />
              </div>
            </Reveal>
          );
        })}

        {thin.map((p) => (
          <Reveal as="article" key={p.id} className="card col-span-12 p-[var(--pad-card)]">
            <div id={p.id} className="flex scroll-mt-24 flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-h3">{p.name}</h3>
              <Label>{p.kind}</Label>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

/** The one light field on the page: the upcoming event, set apart by inversion. */
function NewFrontiersTeaser() {
  const nf = newFrontiers;
  const facts = [
    { term: "Format", value: `${nf.durationHours} hours, kickoff Friday, pitches Sunday` },
    { term: "For", value: nf.participants },
    { term: "Main track", value: nf.mainTrack },
    { term: "Subtracks", value: nf.subtracks.map((s) => s.name).join(", ") },
  ];

  return (
    <section aria-labelledby="nf-title" id="new-frontiers" className="field-light">
      <div className="section shell grid-12 gap-y-14">
        <Reveal className="col-span-12 lg:col-span-6">
          <Label>Hackathon · {nf.status}</Label>
          <h2 id="nf-title" className="text-display mt-5">{nf.name}</h2>
          <p className="text-lead mt-6 max-w-[30ch]">{nf.summary}</p>
          <CoOrganisers className="mt-6" />
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/new-frontiers" className="btn btn-solid">
              Hackathon details <ArrowRight />
            </a>
            <a href="/new-frontiers#sponsors" className="btn btn-ghost">
              For sponsors <ArrowRight />
            </a>
          </div>
        </Reveal>

        <Reveal delay={80} className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="label">{nf.dates.proposed ? "Dates (proposed)" : "Dates"}</p>
          <p className="text-h3 mt-2">{nf.dates.label}</p>
          {/* Filled in by client.ts from the proposed kickoff date; absent without JS. */}
          <p data-countdown={nf.dates.kickoffISO} hidden className="mt-3 text-fg-2">
            <span className="num text-[clamp(2.5rem,1.75rem+2.5vw,4.5rem)] leading-none text-fg" data-days />{" "}
            days to the proposed kickoff
          </p>
          <dl className="mt-10 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.term}>
                <dt className="label">{f.term}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function HowWeWork() {
  const [sem1, sem2] = cohort.semesters;
  return (
    <section aria-labelledby="how-title" id="how-we-work" className="section shell">
      <SectionHead
        id="how-title"
        label="How we work"
        meta={cohort.label}
        title="We train people first, then put them on real teams."
        intro="Every member starts in the design or engineering track. In the second semester, designers and engineers work together in mixed project teams."
      />

      {/* Two parallel tracks in semester 1 become one mixed field in semester 2. */}
      <div className="mt-[var(--space-head)] grid gap-[var(--col-gap)]">
        <Reveal className="grid-12 gap-y-4">
          <div className="col-span-12 md:col-span-3">
            <p className="label">{sem1.name}</p>
            <p className="text-h3 mt-2">{sem1.title}</p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-[var(--col-gap)] md:col-span-9">
            {sem1.lanes.map((lane, i) => (
              <div
                key={lane}
                className={`flex min-h-32 items-end bg-raised p-[var(--pad-card)] lg:min-h-44 ${i === 0 ? "merge-left" : "merge-right"}`}
              >
                <p className="text-lg font-semibold tracking-[-0.02em] sm:text-2xl">{lane}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="grid-12 gap-y-4">
          <div className="col-span-12 md:col-span-3">
            <p className="label">{sem2.name}</p>
            <p className="text-h3 mt-2">{sem2.title}</p>
          </div>
          <div className="merge-bar col-span-12 flex min-h-32 items-end bg-fg p-[var(--pad-card)] text-bg md:col-span-9 lg:min-h-44">
            <p className="text-lg font-semibold tracking-[-0.02em] sm:text-2xl">{sem2.lanes[0]}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function LeaderPhoto({ leader: l, sizes }: { leader: Leader; sizes: string }) {
  return (
    <div className="portrait aspect-[4/5] overflow-hidden bg-raised">
      {l.photo ? (
        <Portrait
          base={l.photo.base}
          width={l.photo.width}
          height={l.photo.height}
          alt={`${l.name}, ${l.role}`}
          sizes={sizes}
          className="h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}

function Team() {
  const [head, ...vices] = leaders;
  return (
    <section aria-labelledby="team-title" id="team" className="section shell bg-bg">
      <SectionHead
        id="team-title"
        label="Team"
        meta={`${leaders.length} leads · ${site.memberCount} members`}
        title={
          <>
            Led by <span className="num">3</span>.<br />
            Built by <span className="num">{site.memberCount}</span>.
          </>
        }
      />

      {/* Head: photo left, name and title right, at full scale. */}
      <Reveal className="mt-[var(--space-head)] grid-12 items-center gap-y-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4">
          <LeaderPhoto leader={head} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 92vw" />
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
          <Label>Head</Label>
          <h3 className="mt-4 text-[clamp(2.5rem,1.5rem+4vw,6rem)] font-semibold leading-[0.93] tracking-[-0.05em]">
            {head.name}
          </h3>
          <p className="text-lead mt-5 text-fg-2">{head.role}</p>
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-mono text-sm">
            {[
              { href: contact.telegramUrl, label: `Telegram ${contact.telegramHandle}` },
              { href: contact.linkedinUrl, label: "LinkedIn" },
              { href: contact.websiteUrl, label: contact.websiteLabel },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="row-link inline-flex items-center gap-2 text-fg-2 transition-colors hover:text-fg"
                >
                  {l.label} <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Vice Heads: the same photo-beside-text pattern, one step down in scale. */}
      <div className="mt-[clamp(4rem,3rem+3vw,7rem)]">
        <Label>Vice Heads</Label>
        <ul className="mt-6 grid-12 gap-y-10">
          {vices.map((l, i) => (
            <Reveal
              as="li"
              key={l.name}
              delay={i * 80}
              className="col-span-12 grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-end gap-[clamp(1rem,0.5rem+1.5vw,2rem)] md:col-span-6"
            >
              <LeaderPhoto leader={l} sizes="(min-width: 768px) 19vw, 37vw" />
              <div>
                <p className="text-[clamp(1.5rem,1.1rem+1.2vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
                  {l.name}
                </p>
                <p className="mt-2 text-fg-2">{l.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal className="mt-[clamp(4rem,3rem+3vw,7rem)] grid-12 items-end gap-y-4">
        <p className="num col-span-12 text-[clamp(5rem,3rem+8vw,11rem)] leading-[0.82] md:col-span-3">
          {site.memberCount}
        </p>
        <p className="text-lead col-span-12 max-w-[30ch] md:col-span-9">
          members across the design and engineering tracks.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ContactRow({ href, label, value }: { href: string; label: string; value: string }) {
  return (
    <li className="border-t border-line last:border-b">
      <a href={href} className="row-link fill-row group flex items-center justify-between gap-6 py-6">
        <span className="min-w-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-5">
          <span className="label block">{label}</span>
          <span className="text-h3 mt-1 block break-words">
            {/* Let an email address wrap before the @, not mid-word. */}
            {value.includes("@") && !value.startsWith("@") ? (
              <>
                {value.slice(0, value.indexOf("@"))}
                <wbr />
                {value.slice(value.indexOf("@"))}
              </>
            ) : (
              value
            )}
          </span>
        </span>
        <span className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-x-5 [&_svg]:size-6"><ArrowUpRight /></span>
      </a>
    </li>
  );
}

function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="section shell bg-raised">
      <SectionHead
        id="contact-title"
        label="Join or get in touch"
        meta="Telegram, email or LinkedIn"
        title="Want to build with us?"
        intro={recruitment.timing ?? `Message ${contact.name} to ask about the next intake.`}
      />
      <Reveal delay={80} className="mt-[var(--space-head)] grid-12">
        <div className="col-span-12 lg:col-span-8">
          <ul>
            <ContactRow href={contact.telegramUrl} label="Telegram" value={contact.telegramHandle} />
            <ContactRow href={`mailto:${contact.email}`} label="Email" value={contact.email} />
            <ContactRow href={contact.linkedinUrl} label="LinkedIn" value={contact.linkedinLabel} />
          </ul>
          <p className="mt-6 text-fg-2">
            {contact.name}, {contact.role}. Sponsoring New Frontiers? Same channels, or read the{" "}
            <a className="link text-fg" href="/new-frontiers#sponsors">sponsor brief</a>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
