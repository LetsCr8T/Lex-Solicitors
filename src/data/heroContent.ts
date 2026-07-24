import type { HeroContent } from "@/types";
import { CONTACT_PATH } from "@/lib/constants";

/**
 * Hero headline options. `primary` is what renders; the alternates are kept so
 * they can be previewed and swapped in without touching the component.
 */
export const heroHeadlines = {
  primary: "Navigate complexity with confidence.",
  alt1: "Sound counsel for the decisions that shape your business.",
  alt2: "Where expertise meets integrity.",
} as const;

export const heroContent: HeroContent = {
  eyebrow: "Advisory-led, commercially minded",
  headline: heroHeadlines.primary,
  headlineAccent: "confidence.",
  headlineAlternates: [heroHeadlines.alt1, heroHeadlines.alt2],
  subhead:
    "A bespoke advisory firm delivering practical, results-driven counsel across legal, regulatory, governance, tax and real estate matters — support built to help your business grow sustainably.",
  primaryCta: { label: "Book a Consultation", href: CONTACT_PATH },
  secondaryCta: { label: "Explore Our Services", href: "#practice-areas" },
  meta: ["Expertise", "Integrity", "Results"],
};
