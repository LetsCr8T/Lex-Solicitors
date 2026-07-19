import { JsonLd } from "@/components/common/JsonLd";
import { About } from "@/components/landing/About";
import { Approach } from "@/components/landing/Approach";
import { ConsultationCta } from "@/components/landing/ConsultationCta";
import { Faq } from "@/components/landing/Faq";
import { Hero } from "@/components/landing/Hero";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Values } from "@/components/landing/Values";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { buildWebsiteJsonLd } from "@/lib/structuredData";

/**
 * Home page — the landing composition:
 * Hero → TrustStrip → About → WhyChooseUs → PracticeAreas → Approach → Values →
 * Faq → ConsultationCta. Contact now lives on its own /contact route.
 */
export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
      <JsonLd data={buildWebsiteJsonLd()} />
      <Hero />
      <TrustStrip />
      <About />
      <WhyChooseUs />
      <PracticeAreas />
      <Approach />
      <Values />
      <Faq />
      <ConsultationCta />
    </main>
  );
}
