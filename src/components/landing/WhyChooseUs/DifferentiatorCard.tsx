import {
  Award,
  Briefcase,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Differentiator } from "@/types";

const iconMap: Record<Differentiator["icon"], LucideIcon> = {
  layers: Layers,
  briefcase: Briefcase,
  "shield-check": ShieldCheck,
  award: Award,
};

export interface DifferentiatorCardProps {
  item: Differentiator;
}

/** Non-interactive differentiator card: gold icon slot, title, description. */
export function DifferentiatorCard({ item }: DifferentiatorCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent/40">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon aria-hidden className="size-6" />
      </span>
      <h3 className="font-display text-xl font-semibold text-ink">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        {item.description}
      </p>
    </div>
  );
}
