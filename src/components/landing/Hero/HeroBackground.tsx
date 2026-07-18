/**
 * Decorative hero backdrop over the ink (navy) section: a faint top sheen, two
 * soft brand-color glows in the corners, and a restrained pillar motif that
 * echoes the logo's columns. Purely decorative and low-opacity so it never
 * affects text contrast. Server Component.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Top sheen for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-foreground/[0.06] via-transparent to-transparent" />

      {/* Warm gold glow, top-right */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      {/* Cool haven glow, bottom-left */}
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-haven/10 blur-3xl" />

      {/* Pillar / column motif */}
      <svg
        className="absolute inset-y-0 right-0 h-full w-2/3 text-primary-foreground/[0.05] sm:w-1/2"
        viewBox="0 0 480 600"
        fill="currentColor"
        preserveAspectRatio="xMaxYMid slice"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} x={60 * i + 40} y={40} width={16} height={520} rx={8} />
        ))}
      </svg>
    </div>
  );
}
