/** Radii + gold opacity for the concentric arc rings, outer → inner. */
const ARCS = [
  { r: 560, opacity: 0.16 },
  { r: 460, opacity: 0.34 }, // the emphasis ring (also drawn slightly bolder)
  { r: 360, opacity: 0.25 },
  { r: 260, opacity: 0.2 },
  { r: 160, opacity: 0.14 },
];

/**
 * Light hero backdrop. The firm's navy stays ink-and-accent only — never a full
 * field. Here we layer a cool haven-blue wash with a warm champagne-gold whisper
 * for depth, a soft fade into the next section, and a set of concentric gold
 * arcs sweeping off the top-right corner — an arched colonnade that echoes the
 * logo's columns. Purely decorative and cheap (no blur filters that would delay
 * the hero LCP paint).
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Cool haven glow, top-right. */}
      <div className="absolute inset-0 bg-radial-[at_90%_0%] from-haven/30 to-transparent to-60%" />
      {/* Warm gold whisper layered over it for richness. */}
      <div className="absolute inset-0 bg-radial-[at_100%_0%] from-gold/12 to-transparent to-45%" />
      {/* Gentle fade into the trust strip below. */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-muted/40" />
      {/* Concentric champagne-gold arcs — arched colonnade motif that replaces
          the old vertical bars. Desktop only; phones keep a clean canvas. */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
        className="absolute -top-40 -right-40 hidden h-184 w-184 text-gold sm:block"
      >
        {ARCS.map(({ r, opacity }) => (
          <circle
            key={r}
            cx={600}
            cy={0}
            r={r}
            strokeWidth={r === 460 ? 2 : 1}
            strokeOpacity={opacity}
          />
        ))}
      </svg>
    </div>
  );
}
