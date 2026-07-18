import { PillarMotif } from "@/components/common/PillarMotif";
import { siteConfig } from "@/data/siteConfig";

// The firm tagline, split into its individual words for display.
const taglineWords = siteConfig.tagline
  .split(".")
  .map((word) => word.trim())
  .filter(Boolean);

/**
 * Decorative ink panel for the About section: the pillar motif behind the firm
 * tagline. Shown on desktop only; the tagline text is real (readable) while the
 * motif is decorative. Server Component.
 */
export function AboutVisual() {
  return (
    <div className="relative hidden min-h-80 overflow-hidden rounded-2xl bg-primary p-10 lg:block">
      <PillarMotif className="absolute inset-y-0 right-0 h-full w-2/3 text-primary-foreground/6" />
      <div className="relative flex h-full flex-col justify-center gap-2">
        {taglineWords.map((word) => (
          <span
            key={word}
            className="font-display text-4xl leading-tight font-semibold text-primary-foreground xl:text-5xl"
          >
            {word}
            <span className="text-accent">.</span>
          </span>
        ))}
      </div>
    </div>
  );
}
