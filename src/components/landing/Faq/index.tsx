import { CTAButton } from "@/components/common/CTAButton";
import { JsonLd } from "@/components/common/JsonLd";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FaqAccordion } from "@/components/landing/Faq/FaqAccordion";
import { faqContactPrompt, faqs } from "@/data/faqs";
import { CONTACT_PATH } from "@/lib/constants";
import { buildFaqJsonLd } from "@/lib/structuredData";

/** FAQ section: accessible accordion, contact fallback, and FAQPage JSON-LD. */
export function Faq() {
  return (
    <Section id="faq" variant="default">
      <JsonLd data={buildFaqJsonLd(faqs)} />
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading
          as="h2"
          align="center"
          eyebrow="FAQ"
          title="Answers to common questions."
        />
        <FaqAccordion faqs={faqs} />
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground">{faqContactPrompt}</p>
          <CTAButton href={CONTACT_PATH} variant="primary" size="md">
            Book a Consultation
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
