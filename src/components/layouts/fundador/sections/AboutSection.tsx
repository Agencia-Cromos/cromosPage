import { AboutIntro } from "@/components/fragments/fundador/about/AboutIntro";
import { AboutHighlights } from "@/components/fragments/fundador/about/AboutHighlights";
import { AboutPortrait } from "@/components/fragments/fundador/about/AboutPortrait";

export function AboutSection() {
  return (
    <section id="about" className="bg-[color:var(--color-bg,#0A0E17)] py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10">
          <div className="flex w-full flex-col justify-center">
            <AboutIntro />
          </div>
          <div className="w-full max-w-[360px] sm:max-w-[380px] lg:ml-auto lg:w-full lg:max-w-[320px]">
            <AboutPortrait />
          </div>
        </div>
        <AboutHighlights />
      </div>
    </section>
  );
}
