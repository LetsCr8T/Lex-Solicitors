import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { JsonLd } from "@/components/common/JsonLd";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactChannel } from "@/components/landing/Contact/ContactChannel";
import { ContactMap } from "@/components/landing/Contact/ContactMap";
import { contactContent } from "@/data/contactContent";
import { siteConfig } from "@/data/siteConfig";
import { buildLocalBusinessJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} — call or email to book a consultation with our Lagos law firm.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { eyebrow, title, intro, channels, mapQuery } = contactContent;

  return (
    <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <Container className="flex flex-col gap-14 pt-28 pb-16 md:gap-16 md:pt-36 md:pb-24">
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          subtitle={intro}
          className="max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="flex flex-col gap-5">
            {channels.map((channel) => (
              <li key={channel.id}>
                <ContactChannel channel={channel} />
              </li>
            ))}
          </ul>
          <ContactMap query={mapQuery} />
        </div>
      </Container>
    </main>
  );
}
