import { CTAButton } from "@/components/common/CTAButton";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AboutVisual } from "@/components/landing/About/AboutVisual";
import { aboutContent } from "@/data/aboutContent";

/** About section: firm overview, truthful facts, and a consultation CTA. */
export function About() {
  return (
    <Section id="about" variant="default">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            as="h2"
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
          />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <CTAButton
            href={aboutContent.cta.href}
            variant="primary"
            size="lg"
            className="self-start"
          >
            {aboutContent.cta.label}
          </CTAButton>
        </div>

        <AboutVisual />
      </div>
    </Section>
  );
}
