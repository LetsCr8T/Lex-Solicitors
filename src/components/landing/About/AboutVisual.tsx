import { PillarMotif } from "@/components/common/PillarMotif";
import { siteConfig } from "@/data/siteConfig";

// The firm tagline, split into its individual words for display.
const taglineWords = siteConfig.tagline
  .split(".")
  .map((word) => word.trim())
  .filter(Boolean);

/**
 * Light "brand promise" panel for the About section (desktop only). The firm
 * tagline in navy over a whisper of the pillar motif that echoes the logo's
 * columns — an elevated card on the light section, with no dark field and no
 * gold. Its own height fills the row beside the narrative. Server Component.
 */
export function AboutVisual() {
  return (
    <div className="relative hidden min-h-96 overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-sm lg:flex lg:flex-col lg:justify-center">
      <PillarMotif className="absolute inset-y-0 right-0 h-full w-2/3 text-haven/70" />

      <div className="relative flex flex-col gap-3">
        <span className="mb-3 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          <span aria-hidden className="h-px w-6 bg-primary" />
          What we stand for
        </span>
        {taglineWords.map((word) => (
          <span
            key={word}
            className="font-display text-5xl leading-[1.08] font-semibold text-ink xl:text-6xl"
          >
            {word}
            <span className="text-haven">.</span>
          </span>
        ))}
      </div>
    </div>
  );
}
