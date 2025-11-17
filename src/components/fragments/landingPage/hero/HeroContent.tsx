import { CtaButton } from "@/components/common/CtaButton";
import type { CSSProperties } from "react";
import { HeroPartners } from "./HeroPartners";


const gradientTextStyle: CSSProperties = {
  backgroundImage: "var(--bg-gradient-primary)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
};

const fadeUpStyle = (delay: string): CSSProperties => ({
  animation: "fadeUp 0.9s ease-out forwards",
  animationDelay: delay,
});

export function HeroContent() {
  return (
    <div className="relative z-10 flex max-w-4xl flex-col items-start gap-10 text-left">
      <h1
        className="text-balance font-headline text-3xl text-white sm:text-6xl md:text-7xl"
        style={fadeUpStyle("0.2s")}
      >
        Construímos soluções digitais que fazem{" "}
        <span className="text-transparent" style={gradientTextStyle}>
          empresas evoluírem
        </span>
      </h1>
      <p
        className="max-w-2xl text-balance font-sans text-lg text-[color:var(--color-gray-200)] sm:text-xl"
        style={fadeUpStyle("0.35s")}
      >
        Na CROMOS, criamos e entregamos tecnologia sob medida que transformam visão em resultado real para o seu negócio.
      </p>
      <div
        className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
        style={fadeUpStyle("0.45s")}
      >
        <CtaButton
          href="https://wa.me/message/ACFRONES45HZM1"
          className="w-full sm:w-auto"
          target="_blank"
        >
          Falar no WhatsApp
        </CtaButton>
        <CtaButton
          href="#solutionsSection"
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Conheça nossos serviços
        </CtaButton>
      </div>
      <HeroPartners id="parceiros" style={fadeUpStyle("0.6s")} />
    </div>
  );
}





