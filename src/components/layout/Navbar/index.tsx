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
 * Primary navigation (inside the fixed header). On the home route it is
 * transparent with light text over the ink hero, going solid on scroll. On
 * every other route it stays solid so it reads against a light background.
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
        "transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/85 text-foreground shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-primary-foreground",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo priority variant={solid ? "default" : "light"} />
        <DesktopNav items={navItems} activeId={activeId} pathname={pathname} />
        <div className="flex items-center gap-2">
          <CTAButton
            href={CONTACT_PATH}
            variant="gold"
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
