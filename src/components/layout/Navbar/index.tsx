"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { Logo } from "@/components/common/Logo";
import { DesktopNav } from "@/components/layout/Navbar/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems, navSectionIds } from "@/data/nav";
import { useScrolled } from "@/hooks/useScrolled";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { CONTACT_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Primary navigation (inside the fixed header). The hero is now a light canvas,
 * so the bar always uses ink text and the navy logo; it is transparent at the
 * top and turns to a translucent white with a hairline + soft shadow once the
 * page scrolls (and on every inner route).
 */
export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const activeId = useScrollSpy(navSectionIds);
  const solid = scrolled || pathname !== "/";

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "text-foreground transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo priority variant="default" />
        <DesktopNav items={navItems} activeId={activeId} pathname={pathname} />
        <div className="flex items-center gap-2">
          <CTAButton
            href={CONTACT_PATH}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book a Consultation
          </CTAButton>
          <MobileNav activeId={activeId} pathname={pathname} />
        </div>
      </Container>
    </nav>
  );
}
