import { AboutIntro } from "@/components/fragments/fundador/about/AboutIntro";
import { AboutHighlights } from "@/components/fragments/fundador/about/AboutHighlights";

export function AboutSection() {
  return (
    <section id="about" className="bg-[color:var(--color-bg,#0A0E17)] py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <AboutIntro />
        <AboutHighlights />
      </div>
    </section>
  );
}
