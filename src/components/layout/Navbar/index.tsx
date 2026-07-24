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
 * Primary navigation (inside the fixed header). The bar carries the firm's navy
 * (matching the top utility bar) with the white logo and light links; the haven
 * blue is the accent for hover/active states. A soft shadow appears once the
 * page scrolls so content passing beneath it stays separated.
 */
export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const activeId = useScrollSpy(navSectionIds);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "bg-primary text-primary-foreground transition-shadow duration-300",
        scrolled ? "shadow-lg shadow-primary/25" : "shadow-none",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo priority variant="light" />
        <DesktopNav items={navItems} activeId={activeId} pathname={pathname} />
        <div className="flex items-center gap-2">
          <CTAButton
            href={CONTACT_PATH}
            variant="light"
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
