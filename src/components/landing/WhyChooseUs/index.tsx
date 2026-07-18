import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { DifferentiatorCard } from "@/components/landing/WhyChooseUs/DifferentiatorCard";
import { whyChooseUsContent } from "@/data/aboutContent";

/** Why Choose Us: four data-driven differentiator cards on a muted band. */
export function WhyChooseUs() {
  return (
    <Section id="why-us" variant="muted">
      <div className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading
          as="h2"
          align="center"
          eyebrow={whyChooseUsContent.eyebrow}
          title={whyChooseUsContent.title}
          className="mx-auto max-w-2xl"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {whyChooseUsContent.items.map((item) => (
            <DifferentiatorCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
