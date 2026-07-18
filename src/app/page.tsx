import { About } from "@/components/landing/About";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

/**
 * Home page.
 *
 * Phase 4: Hero → TrustStrip → About → WhyChooseUs. Remaining landing sections
 * (PracticeAreas, Approach, …) are composed below in later phases; the spacer
 * keeps a seam for what follows.
 */
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustStrip />
      <About />
      <WhyChooseUs />
      {/* Placeholder for the remaining sections (built in later phases). */}
      <div className="min-h-[24vh]" />
    </main>
  );
}
