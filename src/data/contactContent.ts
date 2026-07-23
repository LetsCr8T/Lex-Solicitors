import type { ConsultationCtaContent, ContactContent } from "@/types";
import { siteConfig } from "@/data/siteConfig";
import { CONTACT_LINKS, CONTACT_PATH } from "@/lib/constants";
import { mapsDirectionsUrl } from "@/lib/utils";

const mapQuery = `${siteConfig.name}, ${siteConfig.address}`;

export const consultationCtaContent: ConsultationCtaContent = {
  eyebrow: "Get Started",
  title: "Let's talk about what your business needs.",
  subtitle:
    "Book a consultation and get clear, practical counsel from a team that treats your objectives as its own.",
  primaryCta: { label: "Book a Consultation", href: CONTACT_PATH },
};

export const contactContent: ContactContent = {
  eyebrow: "Contact Us",
  title: "Reach the firm.",
  intro:
    "To book a consultation, call us during working hours or send us an email — we respond promptly and will arrange a time to discuss your matter.",
  channels: [
    {
      id: "phone",
      icon: "phone",
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: CONTACT_LINKS.phone,
    },
    {
      id: "email",
      icon: "mail",
      label: "Email",
      value: siteConfig.email,
      href: CONTACT_LINKS.email,
    },
    {
      id: "address",
      icon: "map-pin",
      label: "Office",
      value: siteConfig.address,
      href: mapsDirectionsUrl(mapQuery),
      external: true,
    },
    {
      id: "hours",
      icon: "clock",
      label: "Working Hours",
      value: siteConfig.hours,
    },
  ],
  mapQuery,
};
