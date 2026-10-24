import type { Product, Screenshot } from "@/content";

/* scripts/generate-assets.mjs also writes a -640 variant for shots wider than this. */
const SMALL = 640;

/** A product screenshot with its phone-sized variant. */
export function ShotImg({
  shot,
  sizes,
  priority = false,
}: {
  shot: Screenshot;
  sizes: string;
  priority?: boolean;
}) {
  const small = shot.src.replace(/\.webp$/, `-${SMALL}.webp`);
  return (
    <img
      src={shot.src}
      srcSet={shot.width > SMALL ? `${small} ${SMALL}w, ${shot.src} ${shot.width}w` : undefined}
      sizes={shot.width > SMALL ? sizes : undefined}
      width={shot.width}
      height={shot.height}
      alt={shot.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      className="h-auto w-full"
    />
  );
}

/**
 * Renders the product screenshot when one exists in content.ts. Until then it
 * renders a plate built only from known facts (name and metric), so the
 * layout holds and nothing invented ships.
 */
export function ScreenshotSlot({ product, sizes }: { product: Product; sizes: string }) {
  const shot = product.screenshot;

  if (shot) {
    return (
      <div className="stage bg-raised">
        <ShotImg shot={shot} sizes={sizes} />
      </div>
    );
  }

  // TODO(content): replaced automatically once product.screenshot is set.
  return (
    <div className="flex aspect-[4/3] flex-col justify-between bg-raised p-5" aria-hidden>
      <span className="label">{product.name}</span>
      {product.metric && (
        <span className="num text-[clamp(3rem,2rem+3vw,5rem)] leading-none">{product.metric.value}</span>
      )}
    </div>
  );
}
