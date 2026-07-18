export interface PillarMotifProps {
  className?: string;
}

/**
 * Decorative column / pillar motif that echoes the logo's columns. Uses
 * `currentColor`, so set the tint with a `text-*` token class. Always
 * decorative (`aria-hidden`).
 */
export function PillarMotif({ className }: PillarMotifProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 600"
      fill="currentColor"
      preserveAspectRatio="xMaxYMid slice"
      className={className}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={60 * i + 40} y={40} width={16} height={520} rx={8} />
      ))}
    </svg>
  );
}
