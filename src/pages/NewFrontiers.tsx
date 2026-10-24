import { contact, newFrontiers as nf, products } from "@/content";
import { Footer, Header } from "@/components/chrome";
import { ArrowRight, ArrowUpRight, Label, Marquee, Reveal, RiseText, SectionHead } from "@/components/primitives";
import { CoOrganisers, Sponsors } from "@/components/CoOrganisers";

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
        <Tracks />
        <Format />
        <ForSponsors />
      </main>
      <Footer />
    </>
  );
}

function Intro() {
  const facts = [
    { term: "Duration", value: `${nf.durationHours} hours` },
    { term: "Who", value: nf.participants },
    { term: "Organised by", value: "RHDevs, Raffles Hall, NUS" },
  ];

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
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <p className="text-lead">{nf.summary}</p>
          <p className="mt-4 max-w-[46ch] text-fg-2">
            One main track on startup viability, three subtracks, and a challenge built around hall
            life. The event is in planning; dates are proposed and may move.
          </p>
          <CoOrganisers className="mt-6" />
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sponsors" className="btn btn-solid">
              For sponsors <ArrowRight />
            </a>
            <a href="#tracks" className="btn btn-ghost">
              See the tracks <ArrowRight />
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
          <dl className="mt-10 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.term}>
                <dt className="label">{f.term}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section aria-labelledby="tracks-title" id="tracks" className="section shell bg-raised">
      <SectionHead
        id="tracks-title"
        label="Tracks"
        meta={`1 main · ${nf.subtracks.length} subtracks · 1 challenge`}
        title="One main track. Three subtracks. One hall challenge."
      />

      <div className="mt-[var(--space-head)] grid-12 gap-y-[var(--col-gap)]">
        {/* The main track is the light field: the one emphasis on this page. */}
        <Reveal
          as="article"
          className="field-light col-span-12 flex min-h-64 flex-col justify-between gap-12 p-[var(--pad-card)] lg:col-span-6 lg:row-span-2"
        >
          <Label>Main track</Label>
          <h3 className="text-[clamp(2.5rem,1.5rem+3.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            {nf.mainTrack}
          </h3>
        </Reveal>

        {nf.subtracks.map((t, i) => (
          <Reveal
            as="article"
            key={t.name}
            delay={i * 60}
            className="card col-span-12 flex min-h-44 flex-col justify-between gap-8 p-[var(--pad-card)] sm:col-span-6 lg:col-span-3"
          >
            <Label>{t.note ?? "Subtrack"}</Label>
            <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">{t.name}</h3>
          </Reveal>
        ))}

        <Reveal
          as="article"
          className="card col-span-12 flex min-h-44 flex-col justify-between gap-8 border-dashed border-line-strong p-[var(--pad-card)] sm:col-span-6 lg:col-span-3"
        >
          <Label>Challenge</Label>
          <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">{nf.challenge}</h3>
        </Reveal>
      </div>
    </section>
  );
}

function Format() {
  return (
    <section aria-labelledby="format-title" className="section shell">
      <SectionHead
        id="format-title"
        label="Format"
        meta={`${nf.durationHours} hours`}
        title={`${nf.durationHours} hours, Friday to Sunday.`}
        intro={`${nf.participants}. Open Innovation is the beginner track.`}
      />

      <ol className="mt-[var(--space-head)] grid-12 gap-y-8">
        {nf.format.map((step, i) => (
          <Reveal
            as="li"
            key={step.what}
            delay={i * 80}
            className="col-span-12 border-t border-line-strong pt-5 sm:col-span-4"
          >
            <span className="num block text-[clamp(2.25rem,1.5rem+2.5vw,4rem)] leading-none">{step.when}</span>
            <span className="mt-3 block text-fg-2">{step.what}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function ForSponsors() {
  const proof = products.filter((p) => p.metric).slice(0, 2);

  return (
    <section aria-labelledby="sponsors-title" id="sponsors" className="section shell bg-raised">
      <SectionHead
        id="sponsors-title"
        label="For sponsors"
        title="Back a hackathon run by people who ship."
        intro="RHDevs builds and maintains the software Raffles Hall runs on. New Frontiers brings that standard to a 36-hour hackathon for about 200 NUS students."
      />

      <div className="mt-[var(--space-head)] grid-12 gap-y-14">
        <Reveal className="col-span-12 md:col-span-5">
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

        <Reveal delay={80} className="col-span-12 flex flex-col gap-8 md:col-span-5 md:col-start-8">
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
