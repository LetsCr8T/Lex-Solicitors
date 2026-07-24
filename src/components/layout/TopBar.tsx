import { Clock, Mail, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/data/siteConfig";
import { CONTACT_LINKS } from "@/lib/constants";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-sm text-primary-foreground/80 transition-colors hover:text-haven focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haven focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

/**
 * Thin utility bar above the navbar: hours, phone, email. Ink navy ground
 * (matches the footer) with haven-blue icons and white text. Desktop only.
 */
export function TopBar() {
  return (
    <div className="hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground/80 md:block">
      <Container className="flex h-10 items-center justify-end gap-6 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Clock aria-hidden className="size-3.5 text-haven" />
          <span>{siteConfig.hours}</span>
        </span>
        <a href={CONTACT_LINKS.phone} className={linkClass}>
          <Phone aria-hidden className="size-3.5 text-haven" />
          <span>{siteConfig.phoneDisplay}</span>
        </a>
        <a href={CONTACT_LINKS.email} className={linkClass}>
          <Mail aria-hidden className="size-3.5 text-haven" />
          <span>{siteConfig.email}</span>
        </a>
      </Container>
    </div>
  );
}
