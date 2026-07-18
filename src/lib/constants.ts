import { siteConfig } from "@/data/siteConfig";

/**
 * App-wide constants. Keep values that are reused across components here so
 * they stay DRY and in one place (convention #2).
 */

/** Pre-built contact URLs derived from siteConfig. */
export const CONTACT_LINKS = {
  email: `mailto:${siteConfig.email}`,
  phone: `tel:+${siteConfig.whatsapp}`,
  whatsapp: `https://wa.me/${siteConfig.whatsapp}`,
} as const;

/** Prefilled message for the "Book a Consultation" WhatsApp CTA (shared). */
export const CONSULTATION_MESSAGE =
  "Hello Lex Haven Solicitors, I'd like to book a consultation.";

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
