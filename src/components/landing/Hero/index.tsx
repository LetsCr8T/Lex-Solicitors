import { Container } from "@/components/common/Container";
import { HeroActions } from "@/components/landing/Hero/HeroActions";
import { HeroBackground } from "@/components/landing/Hero/HeroBackground";
import { heroContent } from "@/data/heroContent";

/**
 * Landing hero — a light, airy canvas with the firm's navy used as ink and
 * accent, never as a full background. It holds the single `<h1>` and is the LCP
 * element, so no client JS lives here. Server Component.
 */
export function Hero() {
  const { eyebrow, headline, headlineAccent } = heroContent;
  const hasAccent = !!headlineAccent && headline.endsWith(headlineAccent);
  const headlineLead = hasAccent
    ? headline.slice(0, headline.length - headlineAccent.length)
    : headline;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-background text-foreground"
    >
      <HeroBackground />

      <Container className="relative z-10 flex min-h-[88vh] flex-col justify-center gap-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          <span aria-hidden className="h-px w-10 shrink-0 bg-gold" />
          {eyebrow}
        </span>

        <h1 className="max-w-4xl font-display text-4xl leading-[1.04] font-semibold text-balance text-ink sm:text-6xl lg:text-7xl">
          {headlineLead}
          {hasAccent ? (
            <em className="text-ink italic underline decoration-gold decoration-2 underline-offset-[0.12em]">
              {headlineAccent}
            </em>
          ) : null}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {heroContent.subhead}
        </p>

        <HeroActions
          primaryCta={heroContent.primaryCta}
          secondaryCta={heroContent.secondaryCta}
          meta={heroContent.meta}
        />
      </Container>
    </section>
  );
}
