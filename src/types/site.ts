/**
 * Core firm / site data-model types (content-as-data in `src/data`).
 */

/** A single navigation entry (navbar, footer, mobile nav). */
export interface NavItem {
  label: string;
  /** `anchor` → in-page section (`href` is the section id); `route` → a path. */
  type: "anchor" | "route";
  /** Section id for anchors (e.g. "about"), or a path for routes (e.g. "/contact"). */
  href: string;
}

/** A practice area / legal service offered by the firm. */
export interface Service {
  id: string;
  slug: string;
  title: string;
  /** One-line summary (used in compact contexts like the trust strip). */
  summary: string;
  /** Fuller descriptive paragraph (practice-areas section). */
  description: string;
  /** Representative capabilities within the practice area. */
  capabilities: string[];
  icon: "file-text" | "clipboard-check" | "landmark" | "calculator" | "building-2";
}

/** A core firm value (e.g. Integrity, Diligence). */
export interface Value {
  title: string;
  description: string;
}

/** A frequently asked question entry. */
export interface Faq {
  id: string;
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
  /** E.164 number for the tel: href (e.g. "+2348066672405"). */
  phoneHref: string;
  /** Human-readable number for display (e.g. "0806 667 2405"). */
  phoneDisplay: string;
  address: string;
  hours: string;
  social: SocialLinks;
}
