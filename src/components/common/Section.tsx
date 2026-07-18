import type { ReactNode } from "react";

export interface SectionProps {
  /** Anchor id for in-page navigation / scroll-spy. */
  id?: string;
  children: ReactNode;
  className?: string;
}

/** STUB — semantic `<section>` wrapper with vertical rhythm. Later phase. */
export function Section() {
  return null;
}
