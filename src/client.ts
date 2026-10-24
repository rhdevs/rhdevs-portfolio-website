/*
 * The only client JS. The page is fully rendered and complete without it;
 * everything here is enhancement:
 *   - scroll reveal (.reveal, .rise)
 *   - count-up on proof numbers ([data-count])
 *   - countdown to the proposed New Frontiers kickoff ([data-countdown])
 *   - scroll parallax on the hero collage ([data-parallax])
 * Motion is skipped entirely when the user prefers reduced motion.
 */
import "./styles.css";

const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

/* ---------- Countdown (not motion: always runs) ---------- */
for (const el of document.querySelectorAll<HTMLElement>("[data-countdown]")) {
  const target = Date.parse(el.dataset.countdown ?? "");
  const days = Math.ceil((target - Date.now()) / 86_400_000);
  const out = el.querySelector<HTMLElement>("[data-days]");
  if (Number.isFinite(days) && days > 0 && out) {
    out.textContent = String(days);
    el.hidden = false;
  }
}

if (motionOK && "IntersectionObserver" in window) {
  /* ---------- Count-up ---------- */
  // "~600" -> prefix "~", 600, suffix "". Final text is restored exactly at the end.
  const countUp = (el: HTMLElement) => {
    const final = el.textContent ?? "";
    const m = final.match(/^(\D*)(\d+)(\D*)$/);
    if (!m) return;
    const [, pre, digits, post] = m;
    const to = Number(digits);
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = t < 1 ? `${pre}${Math.round(to * eased)}${post}` : final;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add("is-in");
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  // Read every position first, then write, so the browser lays out once.
  // Anything already on screen at load stays put; only content below the fold animates.
  const viewportBottom = window.innerHeight;
  const els = [...document.querySelectorAll<HTMLElement>(".reveal, .rise")];
  const onScreen = els.map((el) => el.getBoundingClientRect().top < viewportBottom);
  els.forEach((el, i) => (onScreen[i] ? el.classList.add("is-in") : io.observe(el)));
  document.documentElement.classList.add("js");

  /* ---------- Parallax ---------- */
  // One rAF-throttled scroll handler writes a single custom property per
  // collage; each layer multiplies it by its own --depth in CSS.
  const layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
  if (layers.length) {
    let queued = false;
    const update = () => {
      queued = false;
      const y = window.scrollY;
      for (const el of layers) el.style.setProperty("--p", String(y));
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!queued) {
          queued = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
  }
}
