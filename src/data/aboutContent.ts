import type { AboutContent, WhyChooseUsContent } from "@/types";
import { CONTACT_PATH } from "@/lib/constants";

export const aboutContent: AboutContent = {
  eyebrow: "About the Firm",
  title: "A bespoke advisory firm built for modern business.",
  paragraphs: [
    "Lex Haven Solicitors is a multidisciplinary advisory firm offering legal advisory, regulatory compliance, corporate governance, tax consulting, and real estate advisory services. We partner with clients to ensure legal and regulatory compliance, strengthen governance frameworks, and deliver commercially sound solutions that support sustainable business growth.",
    "Our approach is practical and results-driven. We combine deep technical knowledge with real-world commercial insight, so the counsel we provide doesn't just address the legal question in front of you — it moves your business forward with confidence.",
  ],
  cta: { label: "Discuss your needs", href: CONTACT_PATH },
};

export const whyChooseUsContent: WhyChooseUsContent = {
  eyebrow: "Why Lex Haven",
  title: "Counsel you can build a business on.",
  items: [
    {
      id: "multidisciplinary",
      icon: "layers",
      title: "Bespoke by design",
      description:
        "Legal, regulatory, governance, tax and real estate expertise under one roof, so you get joined-up advice instead of fragmented opinions.",
    },
    {
      id: "commercial",
      icon: "briefcase",
      title: "Commercially minded",
      description:
        "We read the business, not just the statute. Every recommendation is weighed against your commercial realities and goals.",
    },
    {
      id: "integrity",
      icon: "shield-check",
      title: "Integrity, without exception",
      description:
        "We hold to the highest standards of ethics, professionalism and transparency in every engagement — no surprises, no shortcuts.",
    },
    {
      id: "results",
      icon: "award",
      title: "Results that endure",
      description:
        "We measure success by the outcomes we help you achieve and the lasting value they create, not by the hours we bill.",
    },
  ],
};
