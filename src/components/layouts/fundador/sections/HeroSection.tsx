import { HeroBackground } from "@/components/fragments/fundador/hero/HeroBackground";
import { HeroHeading } from "@/components/fragments/fundador/hero/HeroHeading";
import { HeroActions } from "@/components/fragments/fundador/hero/HeroActions";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.35),_rgba(10,14,24,0.95)_60%,_rgba(5,8,16,1)_100%)] pt-6 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32"
    >
      <HeroBackground />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center text-[color:var(--color-text,#E5E5E5)] px-6">
        <HeroHeading />
        <HeroActions />
      </div>
    </section>
  );
}
