import { Container } from "@/components/common/Container";
import { services } from "@/data/services";

/**
 * Slim credibility band beneath the hero: the firm's practice-area titles at a
 * glance. Light band (muted) creates a clean seam against the ink hero.
 * Presentational; data-driven from `services`.
 */
export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-strip-label"
      className="border-b border-border bg-muted"
    >
      <Container className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:gap-8 lg:py-5">
        <p
          id="trust-strip-label"
          className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase lg:shrink-0"
        >
          Our practice areas
        </p>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 lg:flex-1">
          {services.map((service, i) => (
            <li key={service.id} className="flex items-center gap-6 sm:gap-8">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="hidden size-1.5 shrink-0 rounded-full bg-accent sm:block"
                />
              ) : null}
              <span className="font-display text-base font-medium text-ink lg:text-lg">
                {service.title}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
