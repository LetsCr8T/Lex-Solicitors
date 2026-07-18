"use client";

import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { Logo } from "@/components/common/Logo";
import { DesktopNav } from "@/components/layout/Navbar/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems, navSectionIds } from "@/data/nav";
import { useScrolled } from "@/hooks/useScrolled";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { CONSULTATION_MESSAGE } from "@/lib/constants";
import { cn, whatsappLink } from "@/lib/utils";

// Prefilled WhatsApp consultation link, built once.
const consultationHref = whatsappLink(CONSULTATION_MESSAGE);

/**
 * Primary navigation (inside the fixed header). Transparent with light text
 * over the ink hero at the top of the page, transitioning to a solid blurred
 * light surface with dark text once scrolled. The logo swaps variant to match.
 */
export function Navbar() {
  const scrolled = useScrolled(24);
  const activeId = useScrollSpy(navSectionIds);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 text-foreground shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-primary-foreground",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo priority variant={scrolled ? "default" : "light"} />
        <DesktopNav items={navItems} activeId={activeId} />
        <div className="flex items-center gap-2">
          <CTAButton
            href={consultationHref}
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book a Consultation
          </CTAButton>
          <MobileNav activeId={activeId} consultationHref={consultationHref} />
        </div>
      </Container>
    </nav>
  );
}
