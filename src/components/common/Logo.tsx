import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

// Intrinsic size of the trimmed logo lockup (scripts/process-logo.mjs).
const LOGO_WIDTH = 758;
const LOGO_HEIGHT = 181;

export interface LogoProps {
  className?: string;
  /** `light` uses the light logo for dark backgrounds (hero navbar, footer). */
  variant?: "default" | "light";
  priority?: boolean;
}

/** Firm logo lockup (mark + wordmark), linking home. */
export function Logo({
  className,
  variant = "default",
  priority = false,
}: LogoProps) {
  const src =
    variant === "light"
      ? "/images/lex-logo-light.png"
      : "/images/lex-logo-dark.png";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        className,
      )}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className="h-9 w-auto"
      />
    </Link>
  );
}
