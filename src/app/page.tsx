import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";

/**
 * Home page.
 *
 * Phase 3: Hero + TrustStrip at the top. Remaining landing sections
 * (About, PracticeAreas, …) are composed below in later phases; the spacer
 * keeps the page scrollable so the header/footer shell reads correctly.
 */
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustStrip />
      {/* Placeholder for the remaining sections (built in later phases). */}
      <div className="min-h-[40vh]" />
    </main>
  );
}
