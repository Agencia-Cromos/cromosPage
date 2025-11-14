import { Container } from "@/components/common/container";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { AnimatedBackground } from "@/components/fragments/landingPage/hero/animated-background";
import { HeroContent } from "@/components/fragments/landingPage/hero/HeroContent";
import { HeroVisual } from "@/components/fragments/landingPage/hero/HeroVisual";



export function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[color:var(--color-bg-dark)] pb-12"
    >
      <AnimatedBackground />
      <HeroVisual />
      <Container
        variant="full"
        className=" z-10 flex flex-1 flex-col justify-center gap-16 pt-32 pb-24"
      >
        <HeroContent />
      </Container>
      <ScrollIndicator className="mt-auto self-center" />
    </section>
  );
}
