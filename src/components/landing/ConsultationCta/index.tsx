import { ArcMotif } from "@/components/common/ArcMotif";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { consultationCtaContent } from "@/data/contactContent";

/** Primary conversion band: confident ink section routing to the contact page. */
export function ConsultationCta() {
  const { eyebrow, title, subtitle, primaryCta } = consultationCtaContent;

  return (
    <Section
      id="consultation"
      variant="ink"
      contained={false}
      className="relative isolate overflow-hidden"
    >
      <ArcMotif
        origin="top-right"
        preserveAspectRatio="xMaxYMid slice"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-2/3 text-haven/25 sm:w-1/2"
      />
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 md:text-center">
          <SectionHeading
            as="h2"
            align="center"
            tone="inverted"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
          <CTAButton
            href={primaryCta.href}
            variant="light"
            size="lg"
            className="w-full sm:w-auto"
          >
            {primaryCta.label}
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
