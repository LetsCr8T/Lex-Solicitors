"use client";

import { useSyncExternalStore } from "react";

// The year never changes during a session, so there is nothing to subscribe to.
const subscribe = () => () => {};

export interface CurrentYearProps {
  /** Server/build-time year — used for SSR and the first hydration render so
   *  markup matches, then the browser swaps in the visitor's real year. */
  initialYear: number;
}

/**
 * The current calendar year, kept correct in the visitor's browser. The page is
 * statically built, so a plain `new Date()` would freeze the year at deploy
 * time; `useSyncExternalStore` renders the build year on the server and the
 * live browser year on the client, so the footer copyright is always right —
 * even across a New Year with no redeploy — with no hydration mismatch.
 */
export function CurrentYear({ initialYear }: CurrentYearProps) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => initialYear,
  );

  return <>{year}</>;
}
