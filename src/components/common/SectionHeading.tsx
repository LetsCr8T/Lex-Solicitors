import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Heading level, to keep the document outline correct. */
  as?: "h1" | "h2" | "h3";
  /** `inverted` = light text for dark (ink) section backgrounds. */
  tone?: "default" | "inverted";
  className?: string;
}

/** Reusable eyebrow + display heading + subtitle block. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const inverted = tone === "inverted";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        // Headings read left-aligned on mobile for consistency; the "centered"
        // sections only center from tablet up (where their layout calls for it).
        centered && "md:items-center md:text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase",
            inverted ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {/* Accent dash — navy on light sections, brand light-blue on dark
              (inverted) sections, so it stays visible without any gold. */}
          <span
            aria-hidden
            className={cn("h-px w-6", inverted ? "bg-haven" : "bg-primary")}
          />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "font-display text-3xl font-semibold text-balance sm:text-4xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            inverted ? "text-primary-foreground/80" : "text-muted-foreground",
            centered && "md:mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
