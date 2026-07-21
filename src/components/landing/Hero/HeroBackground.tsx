import { PillarMotif } from "@/components/common/PillarMotif";

/**
 * Light hero backdrop. The firm's navy is used only as ink and accent, never as
 * a full background: here we lay a faint haven-blue wash in one corner (the only
 * hint of a blue field, kept very low), a whisper of a fade into the next
 * section, and a low-opacity pillar motif echoing the logo's columns. Purely
 * decorative and cheap (no blur filters that would delay the hero LCP paint).
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft haven-blue glow, top-right — the only touch of blue field. */}
      <div className="absolute inset-0 bg-radial-[at_92%_0%] from-haven/25 to-transparent to-55%" />
      {/* Gentle fade into the trust strip below. */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-muted/30" />
      {/* Architectural pillar motif (echoes the logo), navy at a whisper.
          Desktop only — on phones the plain light canvas reads cleaner. */}
      <PillarMotif className="absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary/5 sm:block" />
    </div>
  );
}
