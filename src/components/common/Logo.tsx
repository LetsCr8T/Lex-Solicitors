import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

// Intrinsic size of the client's logo lockup (public/images/Lex-Haven-Logo*.png).
const LOGO_WIDTH = 1976;
const LOGO_HEIGHT = 404;

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
      ? "/images/Lex-Haven-Logo2.png" // white lockup — for dark backgrounds
      : "/images/Lex-Haven-Logo1.png"; // navy lockup — for light backgrounds

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
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}
