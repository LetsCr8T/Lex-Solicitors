import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { PillarMotif } from "@/components/common/PillarMotif";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { consultationCtaContent } from "@/data/contactContent";

/** Primary conversion band: confident ink section routing to the contact page. */
export function ConsultationCta() {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta } =
    consultationCtaContent;

  return (
    <Section
      id="consultation"
      variant="ink"
      contained={false}
      className="relative isolate overflow-hidden"
    >
      <PillarMotif className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-2/3 text-primary-foreground/5 sm:w-1/2" />
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <SectionHeading
            as="h2"
            align="center"
            tone="inverted"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CTAButton
              href={primaryCta.href}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryCta.label}
            </CTAButton>
            <CTAButton
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              {secondaryCta.label}
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
