import type { ValueItem } from "@/types";

export interface ValueCardProps {
  item: ValueItem;
  /** 1-based position, shown as a subtle gold numeral. */
  index: number;
}

/** A single value on the ink band: gold numeral, title, description (light text). */
export function ValueCard({ item, index }: ValueCardProps) {
  return (
    <div className="flex flex-col gap-3 md:items-center md:text-center">
      <span
        aria-hidden
        className="font-display text-3xl font-semibold text-haven"
      >
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="font-display text-2xl font-semibold text-ink">
        {item.title}
      </h3>
      <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
}
