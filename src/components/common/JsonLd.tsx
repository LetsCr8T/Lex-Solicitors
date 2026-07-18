import type { SiteConfig } from "@/types";

export interface JsonLdProps {
  /** Firm configuration the structured data will be generated from. */
  config?: SiteConfig;
}

/**
 * Structured data (JSON-LD) for the firm.
 *
 * STUB — a later phase will emit a `LegalService` / `LocalBusiness` schema.org
 * `<script type="application/ld+json">` built from `siteConfig`. Renders
 * nothing for now.
 */
export function JsonLd() {
  return null;
}
