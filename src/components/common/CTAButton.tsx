import type { ReactNode } from "react";

export interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  /** Renders an external-link target when true. */
  external?: boolean;
}

/** STUB — link-styled call-to-action button. Implemented in a later phase. */
export function CTAButton() {
  return null;
}
