import { contact, newFrontiers as nf, products, site } from "@/content";
import { Footer, Header } from "@/components/chrome";
import { ArrowRight, ArrowUpRight, Label, Logo, Marquee, Reveal, RiseText, SectionHead } from "@/components/primitives";
import { CoOrganisers, PartnerMark, Sponsors } from "@/components/CoOrganisers";

const deckMailto = `mailto:${contact.email}?subject=${encodeURIComponent(
  "New Frontiers sponsor deck",
)}&body=${encodeURIComponent("Hi Patrick,\n\nCould you send the New Frontiers sponsor deck?\n\n")}`;

export function NewFrontiers() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header page="new-frontiers" />
      <main id="main">
        <Intro />
        <Marquee
          label="All tracks"
          seconds={32}
          items={[
            { name: nf.mainTrack, note: "Main track" },
            ...nf.subtracks.map((t) => ({ name: t.name, note: t.note ?? "Subtrack" })),
            { name: nf.challenge },
          ]}
        />
        <Theme />
        <Tracks />
        <Eligibility />
        <Format />
        <Judging />
        <Awards />
        <Organisers />
        <Outcomes />
        <ForSponsors />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Facts({ items }: { items: { term: string; value: string }[] }) {
  return (
    <dl className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
      {items.map((f) => (
        <div key={f.term}>
          <dt className="label">{f.term}</dt>
          <dd className="mt-1 font-medium">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Intro() {
  return (
    <section
      aria-labelledby="nf-title"
      className="shell pb-[clamp(4.5rem,3rem+5vw,8rem)] pt-[clamp(2.5rem,1rem+5vw,7rem)]"
    >
      <div className="grid-12 gap-y-[clamp(2.5rem,2rem+2vw,4rem)]">
        <div className="col-span-12">
          <Label>AI hackathon · {nf.status}</Label>
          <h1 id="nf-title" className="text-display mt-5">
            <RiseText text={nf.name} />
          </h1>
          <p className="text-h3 mt-4 text-fg-2">{nf.tagline}</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <p className="text-lead">{nf.summary}</p>
          <p className="mt-4 max-w-[46ch] text-fg-2">
            One main track on startup viability, three subtracks, and a challenge built around hall life. The
            event is in planning; dates are proposed and may move.
          </p>
          <CoOrganisers className="mt-6" />
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tracks" className="btn btn-solid">
              See the tracks <ArrowRight />
            </a>
            <a href="#sponsors" className="btn btn-ghost">
              For sponsors <ArrowRight />
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
          <p className="label">{nf.dates.proposed ? "Dates (proposed)" : "Dates"}</p>
          <p className="text-h3 mt-2">{nf.dates.label}</p>
          {/* Filled in by client.ts from the proposed kickoff date; absent without JS. */}
          <p data-countdown={nf.dates.kickoffISO} hidden className="mt-3 text-fg-2">
            <span className="num text-[clamp(2.5rem,1.75rem+2.5vw,4.5rem)] leading-none text-fg" data-days />{" "}
            days to the proposed kickoff
          </p>
          <div className="mt-10">
            <Facts
              items={[
                { term: "Duration", value: `${nf.durationHours} hours over a weekend` },
                { term: "Open to", value: nf.openTo },
                { term: "Teams", value: "1 to 4 people (proposed)" },
                { term: "Organised by", value: "RHDevs, Raffles Hall, NUS" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Theme() {
  return (
    <section aria-labelledby="theme-title" className="section shell bg-raised">
      <SectionHead id="theme-title" label="Theme" meta="Main problem statement" title={nf.tagline} intro={nf.theme.statement} />

      <Reveal className="mt-[var(--space-head)] grid-12 gap-y-12">
        <blockquote className="text-statement col-span-12 max-w-[34ch] lg:col-span-7">{nf.theme.howMightWe}</blockquote>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="label">Every team delivers two things</p>
          <ol className="mt-4 grid gap-4">
            {nf.theme.deliverables.map((d, i) => (
              <li key={d} className="grid grid-cols-[2rem_1fr] gap-2">
                <span className="num text-fg-2">{i + 1}</span>
                <span>{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <ul className="mt-[clamp(3.5rem,2.5rem+3vw,6rem)] grid-12 gap-y-8">
        {nf.pillars.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 80} className="col-span-12 border-t border-line-strong pt-5 md:col-span-4">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{p.name}</h3>
            <p className="mt-2 text-fg-2">{p.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Tracks() {
  return (
    <section aria-labelledby="tracks-title" id="tracks" className="section shell">
      <SectionHead
        id="tracks-title"
        label="Tracks"
        meta={`1 main · ${nf.subtracks.length} subtracks · 1 challenge`}
        title="One main track. Three subtracks. One hall challenge."
        intro={nf.trackRule}
      />

      {/* Main track: the light field, the one emphasis on this page. */}
      <Reveal as="article" className="field-light mt-[var(--space-head)] p-[var(--pad-card)]">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <Label>Main track · every team</Label>
            <h3 className="mt-4 text-[clamp(2.5rem,1.5rem+3.5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
              {nf.mainTrack}
            </h3>
            <p className="text-lead mt-5 max-w-[34ch] text-fg-2">{nf.mainTrackBrief}</p>
          </div>
          <dl className="col-span-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {nf.mainTrackCriteria.map((c) => (
              <div key={c.name} className="border-t border-line-strong pt-4">
                <dt className="font-semibold">{c.name}</dt>
                <dd className="mt-1 text-fg-2">{c.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <div className="mt-[var(--col-gap)] grid-12 gap-y-[var(--col-gap)]">
        {nf.subtracks.map((t, i) => (
          <Reveal
            as="article"
            key={t.name}
            delay={i * 80}
            className="card col-span-12 flex flex-col gap-6 p-[var(--pad-card)] lg:col-span-4"
          >
            <div>
              <Label>{t.note ?? "Subtrack"}</Label>
              <h3 className="text-h3 mt-2">{t.name}</h3>
            </div>
            <p>{t.brief}</p>
            <ul className="flex flex-wrap gap-2" aria-label="Areas">
              {t.explore.map((x) => (
                <li key={x} className="border border-line-strong px-2.5 py-1 text-sm text-fg-2">{x}</li>
              ))}
            </ul>
            <dl className="grid gap-4">
              <div>
                <dt className="label">Best suited to</dt>
                <dd className="mt-1">{t.suitedTo}</dd>
              </div>
              <div>
                <dt className="label">Shown through</dt>
                <dd className="mt-1">{t.shownThrough}</dd>
              </div>
            </dl>
            <details className="disclosure mt-auto border-t border-line pt-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                Guiding questions <span aria-hidden className="disclosure-icon num text-fg-2">+</span>
              </summary>
              <ol className="mt-4 grid gap-3 text-fg-2">
                {t.questions.map((q, n) => (
                  <li key={q} className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="num">{n + 1}</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </details>
          </Reveal>
        ))}

        {/* The challenge sits apart from the tracks: any team can take it on. */}
        <Reveal
          as="article"
          className="card col-span-12 border-dashed border-line-strong p-[var(--pad-card)]"
        >
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 lg:col-span-5">
              <Label>Challenge · open to every subtrack</Label>
              <h3 className="text-h3 mt-2">{nf.challenge}</h3>
              <p className="mt-4 text-fg-2">
                {nf.hallLife.hosts}. {nf.hallLife.brief}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Example problems">
                {nf.hallLife.examples.map((x) => (
                  <li key={x} className="border border-line-strong px-2.5 py-1 text-sm text-fg-2">{x}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="label">How it runs</p>
              <ol className="mt-4 grid gap-4">
                {nf.hallLife.howItRuns.map((h, n) => (
                  <li key={h} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="num text-fg-2">{n + 1}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Eligibility() {
  return (
    <section aria-labelledby="who-title" className="section shell bg-raised">
      <SectionHead id="who-title" label="Who can enter" meta={nf.openTo} title="Any NUS student. Any discipline." />
      <ul className="mt-[var(--space-head)] grid-12 gap-y-10">
        {nf.eligibility.map((e, i) => (
          <Reveal as="li" key={e.name} delay={i * 60} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{e.name}</h3>
            <p className="mt-2 text-fg-2">{e.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Format() {
  return (
    <section aria-labelledby="format-title" className="section shell">
      <SectionHead
        id="format-title"
        label="Format"
        meta={`${nf.durationHours} hours`}
        title="Six stages, from sign-up to awards."
      />

      <ol className="mt-[var(--space-head)] grid-12 gap-y-10">
        {nf.stages.map((s, i) => (
          <Reveal as="li" key={s.name} delay={(i % 3) * 70} className="col-span-12 border-t border-line-strong pt-5 sm:col-span-6 lg:col-span-4">
            <span className="num block text-[clamp(2rem,1.5rem+1.5vw,3rem)] leading-none text-fg-2">{i + 1}</span>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{s.name}</h3>
            <p className="mt-2 text-fg-2">{s.body}</p>
          </Reveal>
        ))}
      </ol>

      {/* Draft run of show: a three-day timetable. */}
      <Reveal className="mt-[clamp(4rem,3rem+3vw,7rem)]">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="text-h3">The weekend</h3>
          <p className="label">
            Build clock: {nf.buildClock} · all times proposed
          </p>
        </div>
        <div className="mt-8 grid gap-[var(--col-gap)] md:grid-cols-3">
          {nf.schedule.map((d) => (
            <div key={d.day} className="bg-raised p-[var(--pad-card)]">
              <p className="font-semibold">{d.day}</p>
              <dl className="mt-5 grid gap-4">
                {d.items.map((it) => (
                  <div key={it.what} className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="num text-sm text-fg-2">{it.time}</dt>
                    <dd>{it.what}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Judging() {
  return (
    <section aria-labelledby="judging-title" className="section shell bg-raised">
      <SectionHead
        id="judging-title"
        label="Judging"
        meta="Proposed weights"
        title="Four criteria, weighted equally."
      />

      {/* The weights drawn as one bar, so the equal split reads at a glance. */}
      <Reveal className="mt-[var(--space-head)]">
        <div className="grid grid-cols-4 gap-1" aria-hidden>
          {nf.judging.map((j) => (
            <div key={j.name} className="h-2 bg-fg" />
          ))}
        </div>
        <ul className="mt-8 grid gap-x-[var(--col-gap)] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {nf.judging.map((j) => (
            <li key={j.name}>
              <span className="num block text-[clamp(2.5rem,1.75rem+2vw,3.75rem)] leading-none">{j.weight}%</span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.015em]">{j.name}</h3>
              <p className="mt-2 text-fg-2">{j.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[70ch] text-fg-2">{nf.judgingBeginnerNote}</p>
      </Reveal>

      <Reveal className="mt-[clamp(4rem,3rem+3vw,7rem)] grid-12 gap-y-8">
        <div className="col-span-12 lg:col-span-4">
          <h3 className="text-h3">What every team submits</h3>
        </div>
        <ol className="col-span-12 grid gap-x-[var(--col-gap)] gap-y-8 sm:grid-cols-2 lg:col-span-8">
          {nf.deliverables.map((d, i) => (
            <li key={d.name} className="grid grid-cols-[2rem_1fr] gap-2 border-t border-line-strong pt-4">
              <span className="num text-fg-2">{i + 1}</span>
              <span>
                <span className="block font-semibold">{d.name}</span>
                <span className="mt-1 block text-fg-2">{d.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Awards() {
  const a = nf.awards;
  return (
    <section aria-labelledby="awards-title" className="section shell">
      <SectionHead id="awards-title" label="Awards" meta={a.note} title={`${a.count} awards across the event.`} />

      <div className="mt-[var(--space-head)] grid-12 gap-[var(--col-gap)]">
        <Reveal className="field-light col-span-12 flex min-h-56 flex-col justify-between gap-10 p-[var(--pad-card)] lg:col-span-5 lg:row-span-2">
          <Label>Main track</Label>
          <div>
            <h3 className="text-[clamp(2.25rem,1.5rem+2.5vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              {a.featured.name}
            </h3>
            <p className="mt-3 text-fg-2">{a.featured.body}</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="col-span-12 lg:col-span-7">
          <ul className="border-t border-line">
            {nf.subtracks.map((t) => (
              <li key={t.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line py-5">
                <span className="text-xl font-semibold tracking-[-0.02em]">{t.name}</span>
                <span className="label">{a.perSubtrack.join(" · ")}</span>
              </li>
            ))}
            <li className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line py-5">
              <span className="text-xl font-semibold tracking-[-0.02em]">{a.extra.name}</span>
              <span className="label">{a.extra.body}</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Organisers() {
  if (!nf.coOrganisersConfirmed) return null;
  return (
    <section aria-labelledby="org-title" className="section shell bg-raised">
      <SectionHead
        id="org-title"
        label="Organisers"
        meta="Partner roles to be agreed"
        title="Led by RHDevs, built with five partners."
      />
      <div className="mt-[var(--space-head)] grid-12 gap-[var(--col-gap)]">
        {/* Lead organiser: our own mark on the dark ground. */}
        <Reveal className="col-span-12 flex flex-col justify-between gap-10 bg-bg p-[var(--pad-card)] lg:col-span-4 lg:row-span-2">
          <div className="flex items-center gap-4">
            <Logo size={64} />
            <span className="text-[clamp(1.75rem,1.25rem+1.5vw,2.5rem)] font-semibold tracking-[-0.04em]">RHDevs</span>
          </div>
          <div>
            <Label>Lead organiser</Label>
            <p className="mt-2 text-fg-2">
              A {site.memberCount}-person student engineering and design team at {site.hall}, shipping live
              products to about 600 residents.{" "}
              <a href="/#work" className="link text-fg">See our work</a>.
            </p>
          </div>
        </Reveal>

        {/* Co-organisers: each mark on a light plate, role underneath. */}
        <ul className="col-span-12 grid gap-[var(--col-gap)] sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {nf.organiserRoles.map((o, i) => (
            <Reveal as="li" key={o.id} delay={i * 60} className="group flex flex-col bg-bg">
              <div className="flex aspect-[3/2] items-center justify-center bg-[#f6f6f4] p-6 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[0.98]">
                <PartnerMark partner={o} />
              </div>
              <div className="p-4">
                {o.logo && <p className="font-semibold">{o.name}</p>}
                <p className="text-sm text-fg-2">{o.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Outcomes() {
  return (
    <section aria-labelledby="outcomes-title" className="section shell">
      <SectionHead id="outcomes-title" label="Outcomes" title="What the weekend should leave behind." />
      <ul className="mt-[var(--space-head)] grid-12 gap-y-10">
        {nf.outcomes.map((o, i) => (
          <Reveal as="li" key={o.name} delay={i * 60} className="col-span-12 border-t border-line-strong pt-5 sm:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{o.name}</h3>
            <p className="mt-2 text-fg-2">{o.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ForSponsors() {
  const proof = products.filter((p) => p.metric).slice(0, 2);

  return (
    <section aria-labelledby="sponsors-title" id="sponsors" className="section shell bg-raised">
      <SectionHead
        id="sponsors-title"
        label="For sponsors"
        meta="Sponsorships open"
        title="Back a hackathon run by people who ship."
        intro="RHDevs builds and maintains the software Raffles Hall runs on. New Frontiers brings that standard to a 36-hour hackathon for about 200 NUS students."
      />

      <div className="mt-[var(--space-head)] grid-12 gap-y-14">
        <Reveal className="col-span-12 lg:col-span-7">
          <h3 className="text-h3">Ways to support</h3>
          <ul className="mt-6 grid gap-x-[var(--col-gap)] gap-y-8 sm:grid-cols-2">
            {nf.sponsorAsks.map((s) => (
              <li key={s.name} className="border-t border-line-strong pt-4">
                <span className="block font-semibold">{s.name}</span>
                <span className="mt-1 block text-fg-2">{s.body}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
          <h3 className="text-h3">What you get back</h3>
          <ul className="mt-6 grid gap-3">
            {nf.sponsorReturns.map((r) => (
              <li key={r} className="grid grid-cols-[1.25rem_1fr] gap-2">
                <span aria-hidden className="text-fg-2">→</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-6 lg:col-span-5">
          <div className="flex flex-col items-start gap-3">
            {nf.sponsorDeckUrl ? (
              <a href={nf.sponsorDeckUrl} className="btn btn-solid" download>
                Download the sponsor deck (PDF) <ArrowRight />
              </a>
            ) : (
              <a href={deckMailto} className="btn btn-solid">
                Request the sponsor deck <ArrowRight />
              </a>
            )}
            <a href={contact.telegramUrl} className="btn btn-ghost">
              Telegram {contact.telegramHandle} <ArrowUpRight />
            </a>
          </div>
          <p className="mt-5 text-fg-2">
            Or email <a className="link break-all text-fg" href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </Reveal>

        <Reveal delay={80} className="col-span-12 flex flex-col gap-8 md:col-span-6 lg:col-span-4 lg:col-start-9">
          <div>
            <Label>What we already run</Label>
            <ul className="mt-4">
              {proof.map((p) => (
                <li key={p.id} className="border-t border-line py-5 last:border-b">
                  <span className="num block text-[clamp(2.5rem,1.75rem+2vw,3.75rem)] leading-none">
                    {p.metric!.value}
                  </span>
                  <span className="mt-2 block text-fg-2">
                    {p.metric!.label},{" "}
                    <a href={`/#${p.id}`} className="link text-fg">{p.name}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Sponsors />
        </Reveal>
      </div>
    </section>
  );
}
