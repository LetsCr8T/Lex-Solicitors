import { CTAButton } from "@/components/common/CTAButton";
import type { HeroCta } from "@/types";

export interface HeroActionsProps {
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  meta: string[];
}

/** Hero CTA row (primary + outline) plus the inline tagline meta line. */
export function HeroActions({
  primaryCta,
  secondaryCta,
  meta,
}: HeroActionsProps) {
  return (
    <div className="mt-4 flex flex-col gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CTAButton
          href={primaryCta.href}
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
        >
          {primaryCta.label}
        </CTAButton>
        <CTAButton
          href={secondaryCta.href}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
        >
          {secondaryCta.label}
        </CTAButton>
      </div>

      <ul className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {meta.map((item, i) => (
          <li key={item} className="flex items-center gap-3">
            {i > 0 ? (
              <span aria-hidden className="size-1 rounded-full bg-primary" />
            ) : null}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
