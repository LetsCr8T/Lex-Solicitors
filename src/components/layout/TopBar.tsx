import { Clock, Mail, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/data/siteConfig";
import { CONTACT_LINKS } from "@/lib/constants";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/**
 * Thin light utility bar above the navbar: hours, phone, email. Navy icons on a
 * near-white ground keep the top of the page airy (no navy field). Desktop only.
 */
export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-background/80 text-muted-foreground backdrop-blur-md md:block">
      <Container className="flex h-10 items-center justify-end gap-6 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Clock aria-hidden className="size-3.5 text-primary" />
          <span>{siteConfig.hours}</span>
        </span>
        <a href={CONTACT_LINKS.phone} className={linkClass}>
          <Phone aria-hidden className="size-3.5 text-primary" />
          <span>{siteConfig.phoneDisplay}</span>
        </a>
        <a href={CONTACT_LINKS.email} className={linkClass}>
          <Mail aria-hidden className="size-3.5 text-primary" />
          <span>{siteConfig.email}</span>
        </a>
      </Container>
    </div>
  );
}
