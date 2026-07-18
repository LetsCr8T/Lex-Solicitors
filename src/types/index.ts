/**
 * Shared, app-wide TypeScript interfaces.
 *
 * Data-model shapes (content-as-data in `src/data`) live here. Component prop
 * interfaces are co-located with their components and exported per convention
 * #10; add them in later phases as components are built.
 */

/** A single navigation entry (top bar, navbar, footer, mobile nav). */
export interface NavItem {
  label: string;
  href: string;
  /** Optional nested links for dropdown / grouped menus. */
  children?: NavItem[];
}

/** A practice area / legal service offered by the firm. */
export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
}

/** A core firm value (e.g. Integrity, Diligence). */
export interface Value {
  title: string;
  description: string;
}

/** A hero call-to-action. `type: "whatsapp"` builds the wa.me link; else `href`. */
export interface HeroCta {
  label: string;
  type?: "whatsapp";
  href?: string;
}

/** A labelled fact in the About definition list. */
export interface AboutFact {
  label: string;
  value: string;
}

/** About section copy. */
export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts: AboutFact[];
  cta: HeroCta;
}

/** A single "Why Choose Us" differentiator card. */
export interface Differentiator {
  id: string;
  icon: "layers" | "briefcase" | "shield-check" | "award";
  title: string;
  description: string;
}

/** Why Choose Us section copy. */
export interface WhyChooseUsContent {
  eyebrow: string;
  title: string;
  items: Differentiator[];
}

/** Hero section copy. */
export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** Alternate headlines kept for preview / selection. */
  headlineAlternates: string[];
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  /** Short inline meta items (e.g. the tagline split into three). */
  meta: string[];
}

/** A frequently asked question entry. */
export interface Faq {
  question: string;
  answer: string;
}

/** Outbound social profile links. All optional — none provided yet. */
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  x?: string;
}

/** Central firm + SEO configuration consumed across the app. */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  /** Short one-to-two sentence firm blurb (footer, About teaser). */
  shortAbout: string;
  url: string;
  ogImage: string;
  keywords: string[];
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  established: number;
  social: SocialLinks;
}
