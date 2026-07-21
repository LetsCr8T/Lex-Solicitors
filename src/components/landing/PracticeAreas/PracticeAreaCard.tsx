import {
  ArrowRight,
  Building2,
  Calculator,
  ClipboardCheck,
  FileText,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Disclosure } from "@/components/common/Disclosure";
import { CapabilityList } from "@/components/landing/PracticeAreas/CapabilityList";
import { CONTACT_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<Service["icon"], LucideIcon> = {
  "file-text": FileText,
  "clipboard-check": ClipboardCheck,
  landmark: Landmark,
  calculator: Calculator,
  "building-2": Building2,
};

export interface PracticeAreaCardProps {
  service: Service;
  /** 1-based position, shown as a subtle 01–05 index. */
  index: number;
  /** Extra classes for the card root (e.g. responsive width in the grid). */
  className?: string;
}

/** Presentational practice-area card: icon, index, title, description, list, link. */
export function PracticeAreaCard({
  service,
  index,
  className,
}: PracticeAreaCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:p-8",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-haven/40 text-primary">
          <Icon aria-hidden className="size-6" />
        </span>
        <span
          aria-hidden
          className="font-display text-2xl font-semibold text-muted-foreground"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-display text-2xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      {/* Desktop: capabilities always visible. Mobile: collapsed behind an
          accessible toggle so the card stays scannable (same list, one source). */}
      <div className="hidden md:block">
        <CapabilityList capabilities={service.capabilities} />
      </div>
      <div className="md:hidden">
        <Disclosure
          label="View services"
          triggerClassName="flex w-full items-center justify-between gap-2 border-t border-border py-3 text-sm font-semibold text-ink"
          panelClassName="pt-1 pb-2"
        >
          <CapabilityList capabilities={service.capabilities} />
        </Disclosure>
      </div>

      <Link
        href={`${CONTACT_PATH}?area=${service.slug}`}
        className="group/cta mt-auto inline-flex items-center gap-1.5 self-start rounded-sm pt-1 text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <span>Discuss {service.title}</span>
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 text-primary transition-transform group-hover/cta:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
