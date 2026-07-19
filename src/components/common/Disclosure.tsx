"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface DisclosureProps {
  /** Visible trigger label. */
  label: ReactNode;
  /** Collapsible panel content (stays in the DOM while collapsed → indexable). */
  children: ReactNode;
  /** Uncontrolled initial state. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Controlled open state (e.g. single-open accordions). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Wrap the trigger in a heading of this level (accordion semantics). */
  headingLevel?: 2 | 3 | 4;
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
}

/**
 * Accessible, animated disclosure — one primitive for FAQ, card capabilities,
 * and any read-more. The trigger is a real <button> (aria-expanded +
 * aria-controls); the panel is a labelled region that animates height via the
 * grid 0fr→1fr technique, respects prefers-reduced-motion, and is `inert` while
 * collapsed (removed from the a11y/tab tree but kept in the DOM for indexing).
 */
export function Disclosure({
  label,
  children,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  headingLevel,
  className,
  triggerClassName,
  panelClassName,
}: DisclosureProps) {
  const uid = useId();
  const triggerId = `${uid}-trigger`;
  const panelId = `${uid}-panel`;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = openProp ?? internalOpen;

  function toggle() {
    const next = !open;
    if (openProp === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  }

  const trigger = (
    <button
      id={triggerId}
      type="button"
      aria-expanded={open}
      aria-controls={panelId}
      onClick={toggle}
      className={cn(
        "rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        triggerClassName,
      )}
    >
      <span>{label}</span>
      <ChevronDown
        aria-hidden
        className={cn(
          "size-5 shrink-0 text-accent transition-transform duration-200 motion-reduce:transition-none",
          open && "rotate-180",
        )}
      />
    </button>
  );

  const Heading = headingLevel
    ? (`h${headingLevel}` as "h2" | "h3" | "h4")
    : null;

  return (
    <div className={className}>
      {Heading ? <Heading className="flex">{trigger}</Heading> : trigger}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className={panelClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
