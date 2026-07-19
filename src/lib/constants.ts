import { siteConfig } from "@/data/siteConfig";

/**
 * App-wide constants. Keep values that are reused across components here so
 * they stay DRY and in one place (convention #2).
 */

/** Pre-built contact URLs derived from siteConfig. */
export const CONTACT_LINKS = {
  email: `mailto:${siteConfig.email}`,
  phone: `tel:${siteConfig.phoneHref}`,
} as const;

/** Dedicated contact route — the destination for every consultation CTA. */
export const CONTACT_PATH = "/contact";

/**
 * Stable anchor IDs for the landing-page sections. Used for in-page
 * navigation and scroll-spy once sections are built.
 */
export const SECTION_IDS = {
  hero: "home",
  about: "about",
  whyChooseUs: "why-choose-us",
  practiceAreas: "practice-areas",
  approach: "approach",
  values: "values",
  testimonials: "testimonials",
  faq: "faq",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
