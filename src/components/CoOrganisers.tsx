import { newFrontiers } from "@/content";

export type Partner = (typeof newFrontiers.organiserRoles)[number];

/**
 * A partner's official logo, shown as is: no plate, no border. Every logo is
 * set to the same height so crests, roundels and badges sit on one line.
 * Without a logo, the partner's name stands in.
 */
export function PartnerLogo({ partner, size = "md" }: { partner: Partner; size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-14" : "h-[clamp(5.5rem,3rem+6.5vw,10rem)]";
  return partner.logo ? (
    <img
      src={partner.logo.src}
      width={partner.logo.width}
      height={partner.logo.height}
      alt={size === "sm" ? partner.name : ""}
      title={partner.name}
      loading="lazy"
      decoding="async"
      className={`${h} w-auto max-w-full object-contain`}
    />
  ) : (
    <span className={`flex items-center font-semibold tracking-[-0.03em] ${h}`}>{partner.name}</span>
  );
}

/**
 * Co-organiser line under an intro. Renders nothing unless
 * content.newFrontiers.coOrganisersConfirmed is true. A row of logos once
 * every partner has one; until then, a plain line of names.
 */
export function CoOrganisers({ className = "" }: { className?: string }) {
  const { coOrganisersConfirmed, organiserRoles } = newFrontiers;
  if (!coOrganisersConfirmed || organiserRoles.length === 0) return null;

  if (organiserRoles.every((p) => p.logo)) {
    return (
      <div className={className}>
        <p className="label">Co-organised with</p>
        <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
          {organiserRoles.map((p) => (
            <li key={p.id}>
              <PartnerLogo partner={p} size="sm" />
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
