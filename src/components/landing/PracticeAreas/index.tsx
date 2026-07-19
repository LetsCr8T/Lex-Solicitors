import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PracticeAreaCard } from "@/components/landing/PracticeAreas/PracticeAreaCard";
import { services } from "@/data/services";

/** Practice Areas: data-driven cards across the firm's disciplines. */
export function PracticeAreas() {
  return (
    <Section id="practice-areas" variant="default">
      <div className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading
          as="h2"
          align="center"
          eyebrow="Our Practice Areas"
          title="Advisory across the disciplines your business depends on."
          subtitle="Connected disciplines, delivered by one joined-up team — so your legal, regulatory, governance, tax and real estate needs are handled in concert, not in silos."
          className="mx-auto max-w-2xl"
        />
        {/* flex-wrap + justify-center keeps the trailing (5th) card centered,
            with no lonely orphan, while cards keep their roomy two-up width. */}
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center">
          {services.map((service, i) => (
            <PracticeAreaCard
              key={service.id}
              service={service}
              index={i + 1}
              className="md:w-[calc(50%_-_0.75rem)]"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
