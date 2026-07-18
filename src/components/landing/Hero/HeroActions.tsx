import { CTAButton } from "@/components/common/CTAButton";
import { CONSULTATION_MESSAGE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import type { HeroCta } from "@/types";

export interface HeroActionsProps {
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  meta: string[];
}

/** Hero CTA row (gold + outline) plus the inline tagline meta line. */
export function HeroActions({
  primaryCta,
  secondaryCta,
  meta,
}: HeroActionsProps) {
  const isWhatsapp = primaryCta.type === "whatsapp";
  const primaryHref = isWhatsapp
    ? whatsappLink(CONSULTATION_MESSAGE)
    : (primaryCta.href ?? "#");

  return (
    <div className="mt-4 flex flex-col gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CTAButton
          href={primaryHref}
          variant="gold"
          size="lg"
          aria-label={
            isWhatsapp ? "Book a consultation on WhatsApp" : undefined
          }
        >
          {primaryCta.label}
        </CTAButton>
        <CTAButton
          href={secondaryCta.href ?? "#"}
          variant="outline"
          size="lg"
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          {secondaryCta.label}
        </CTAButton>
      </div>

      <ul className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground/80 uppercase">
        {meta.map((item, i) => (
          <li key={item} className="flex items-center gap-3">
            {i > 0 ? (
              <span aria-hidden className="size-1 rounded-full bg-accent" />
            ) : null}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
