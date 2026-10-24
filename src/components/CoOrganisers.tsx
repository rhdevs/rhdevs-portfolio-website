import { newFrontiers } from "@/content";

/** Renders nothing unless content.newFrontiers.coOrganisersConfirmed is true. */
export function CoOrganisers({ className = "" }: { className?: string }) {
  if (!newFrontiers.coOrganisersConfirmed || newFrontiers.coOrganisers.length === 0) return null;
  return (
    <p className={`text-sm text-fg-2 ${className}`}>
      <span className="label mr-2">Co-organised with</span>
      <span className="text-fg">{newFrontiers.coOrganisers.join(", ")}</span>
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
