import { ChevronDown } from "lucide-react";
import { Container } from "@/components/common/Container";
import { HeroActions } from "@/components/landing/Hero/HeroActions";
import { HeroBackground } from "@/components/landing/Hero/HeroBackground";
import { heroContent } from "@/data/heroContent";

/**
 * Landing hero — the top of the page and its single `<h1>`. Ink canvas sitting
 * under the transparent navbar (top padding clears the fixed header). Server
 * Component; it is the LCP element, so no client JS lives here.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <HeroBackground />

      <Container className="relative z-10 flex min-h-[88vh] flex-col justify-center gap-6 pt-32 pb-24 md:min-h-[86vh] md:pt-40 md:pb-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {heroContent.eyebrow}
        </p>

        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
          {heroContent.headline}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          {heroContent.subhead}
        </p>

        <HeroActions
          primaryCta={heroContent.primaryCta}
          secondaryCta={heroContent.secondaryCta}
          meta={heroContent.meta}
        />
      </Container>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <ChevronDown className="size-6 animate-bounce text-primary-foreground/50" />
      </div>
    </section>
  );
}
