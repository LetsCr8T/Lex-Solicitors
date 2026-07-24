export interface ArcMotifProps {
  className?: string;
  /** Corner the rings radiate from (their shared centre). Default top-right. */
  origin?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /** SVG aspect handling — use a `*slice` value to anchor the arcs to a corner. */
  preserveAspectRatio?: string;
}

/** Ring radii + stroke opacity, outer → inner. The 2nd ring is the emphasis. */
const RINGS = [
  { r: 560, opacity: 0.28 },
  { r: 460, opacity: 0.6 },
  { r: 360, opacity: 0.45 },
  { r: 260, opacity: 0.35 },
  { r: 160, opacity: 0.25 },
];

const ORIGINS = {
  "top-right": { cx: 600, cy: 0 },
  "top-left": { cx: 0, cy: 0 },
  "bottom-right": { cx: 600, cy: 600 },
  "bottom-left": { cx: 0, cy: 600 },
} as const;

/**
 * Concentric "arched colonnade" rings radiating from one corner — the motif that
 * replaced the old vertical pillar bars. Uses `currentColor`, so set the tint
 * with a `text-*` class. Always decorative (`aria-hidden`). Shared by the hero
 * backdrop, the About card, and the consultation band.
 */
export function ArcMotif({
  className,
  origin = "top-right",
  preserveAspectRatio = "xMidYMid meet",
}: ArcMotifProps) {
  const { cx, cy } = ORIGINS[origin];

  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      fill="none"
      stroke="currentColor"
      preserveAspectRatio={preserveAspectRatio}
      className={className}
    >
      {RINGS.map(({ r, opacity }) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={r === 460 ? 2 : 1}
          strokeOpacity={opacity}
        />
      ))}
    </svg>
  );
}
