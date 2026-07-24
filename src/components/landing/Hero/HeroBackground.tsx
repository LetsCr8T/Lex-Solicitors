import { ArcMotif } from "@/components/common/ArcMotif";

/**
 * Light hero backdrop. The firm's navy stays ink-and-accent only — never a full
 * field. Here we layer two haven-blue washes for soft depth, a gentle fade into
 * the next section, and a set of concentric haven-blue arcs sweeping off the
 * top-right corner — an arched colonnade that echoes the logo's columns. Purely
 * decorative and cheap (no blur filters that would delay the hero LCP paint).
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Haven-blue glow, top-right. */}
      <div className="absolute inset-0 bg-radial-[at_90%_0%] from-haven/35 to-transparent to-60%" />
      {/* Paler haven-tint layered over it for depth. */}
      <div className="absolute inset-0 bg-radial-[at_100%_10%] from-haven-tint/50 to-transparent to-45%" />
      {/* Gentle fade into the trust strip below. */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-muted/40" />
      {/* Concentric haven-blue arcs — arched colonnade motif that replaces the
          old vertical bars. Desktop only; phones keep a clean canvas. */}
      <ArcMotif className="absolute -top-40 -right-40 hidden h-184 w-184 text-haven sm:block" />
    </div>
  );
}
