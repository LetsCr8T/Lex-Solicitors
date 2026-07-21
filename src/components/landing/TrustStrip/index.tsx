import { Container } from "@/components/common/Container";
import { services } from "@/data/services";

/**
 * Slim capabilities band beneath the hero — the firm's practice areas at a
 * glance. A centered eyebrow over an evenly separated row reads as one composed
 * line on desktop and a tidy centered stack on mobile (never a scattered wrap).
 * Sits on the brand light-blue band so the row reads as its own surface (a slim
 * accent, not a full field) and separates the hero from the sections below.
 */
export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-strip-label"
      className="border-y border-border bg-muted"
    >
      <Container className="flex flex-col items-center gap-5 py-9 text-center lg:gap-6">
        <p
          id="trust-strip-label"
          className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase"
        >
          <span aria-hidden className="h-px w-6 bg-primary/40" />
          Our Practice Areas
          <span aria-hidden className="h-px w-6 bg-primary/40" />
        </p>

        <ul className="flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
          {services.map((service, i) => (
            <li key={service.id} className="flex items-center gap-6">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="hidden size-1.5 shrink-0 rotate-45 rounded-[1px] bg-primary/30 sm:block"
                />
              ) : null}
              <span className="text-sm font-medium tracking-[0.01em] text-ink sm:text-[0.9375rem]">
                {service.title}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
