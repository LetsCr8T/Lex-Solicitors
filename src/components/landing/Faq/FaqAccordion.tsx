"use client";

import { useState } from "react";
import { Disclosure } from "@/components/common/Disclosure";
import type { Faq } from "@/types";

export interface FaqAccordionProps {
  faqs: Faq[];
}

/**
 * Single-open FAQ accordion built on the shared Disclosure primitive: each
 * question is a heading-wrapped <button> (aria-expanded + aria-controls) and
 * each answer an animated, labelled region. Opening one closes the others.
 */
export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex w-full flex-col divide-y divide-border border-y border-border">
      {faqs.map((faq) => (
        <Disclosure
          key={faq.id}
          headingLevel={3}
          open={openId === faq.id}
          onOpenChange={(next) => setOpenId(next ? faq.id : null)}
          label={faq.question}
          triggerClassName="flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium text-ink"
          panelClassName="pb-5 text-base leading-relaxed text-muted-foreground"
        >
          {faq.answer}
        </Disclosure>
      ))}
    </div>
  );
}
