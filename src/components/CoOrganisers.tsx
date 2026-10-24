import { newFrontiers } from "@/content";

type Partner = (typeof newFrontiers.organiserRoles)[number];

/**
 * A partner's mark: their official logo when we have it, otherwise their name
 * set as a wordmark. Always shown on a light plate, so full-colour crests and
 * dark logos both stay legible on the dark page.
 */
export function PartnerMark({ partner, size = "md" }: { partner: Partner; size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-9" : "h-[clamp(3.5rem,2.5rem+2vw,5rem)]";
  return partner.logo ? (
    <img
      src={partner.logo.src}
      width={partner.logo.width}
      height={partner.logo.height}
      alt={partner.name}
      loading="lazy"
      decoding="async"
      className={`${h} w-auto max-w-full object-contain`}
    />
  ) : (
    <span
      className={`text-center font-semibold leading-none tracking-[-0.04em] text-[#040707] ${
        size === "sm" ? "text-sm" : "text-[clamp(1.4rem,1rem+1.2vw,2.1rem)]"
      }`}
    >
      {partner.name}
    </span>
  );
}

/**
 * Co-organiser line under an intro. Renders nothing unless
 * content.newFrontiers.coOrganisersConfirmed is true. Becomes a row of logo
 * plates once every partner has a logo; until then, a plain line of names.
 */
export function CoOrganisers({ className = "" }: { className?: string }) {
  const { coOrganisersConfirmed, organiserRoles } = newFrontiers;
  if (!coOrganisersConfirmed || organiserRoles.length === 0) return null;

  if (organiserRoles.every((p) => p.logo)) {
    return (
      <div className={className}>
        <p className="label">Co-organised with</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {organiserRoles.map((p) => (
            <li key={p.id} className="flex h-14 items-center bg-[#f6f6f4] px-4">
              <PartnerMark partner={p} size="sm" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <p className={`text-sm text-fg-2 ${className}`}>
      <span className="label mr-2">Co-organised with</span>
      <span className="text-fg">{organiserRoles.map((p) => p.name).join(", ")}</span>
    </p>
  );
}

/** Renders nothing while the sponsors array is empty. */
export function Sponsors() {
  const { sponsors } = newFrontiers;
  if (sponsors.length === 0) return null;
  return (
    <div className="border-t border-line pt-6">
      <p className="label">Sponsors</p>
      <ul className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-6">
        {sponsors.map((s) => (
          <li key={s.name}>
            <a href={s.url} className="link">
              {s.logo ? <img src={s.logo} alt={s.name} height={32} className="h-8 w-auto" loading="lazy" /> : s.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
