import { Container } from "@/components/common/container";
import { CtaButton } from "@/components/common/CtaButton";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  PiBrainBold,
  PiGearSixBold,
  PiHeartBold,
  PiKeyBold,
  PiSpiralBold,
} from "react-icons/pi";
import { AboutDifferentialCard } from "@/components/fragments/landingPage/about/AboutDifferentialCard";

type Differential = {
  label: string;
  headline: string;
  description: string;
  icon: IconType;
  layout?: string;
};

const DIFFERENTIALS: Differential[] = [
  {
    label: "Propriedade Total 🔑",
    headline: "O código é seu. Sempre.",
    description:
      "Nada de dependência. A CROMOS entrega o projeto completo — repositório, infraestrutura e acesso total. Você é dono da tecnologia que constrói seu futuro.",
    icon: PiKeyBold,
    layout: "lg:col-span-2 lg:col-start-1",
  },
  {
    label: "Inteligência Aplicada 🧠",
    headline: "Usamos IA para criar com mais agilidade, não para criar por nós.",
    description:
      "Integramos Inteligência Artificial para acelerar produtividade e precisão sem perder autoria. A tecnologia ajuda — quem cria somos nós.",
    icon: PiBrainBold,
    layout: "lg:col-span-2 lg:col-start-3",
  },
  {
    label: "Tecnologia Humanizada ❤️",
    headline: "Criamos com empatia, não com pressa.",
    description:
      "Antes de programar, entendemos o que move o seu negócio. Cada linha de código nasce do seu contexto — feita para facilitar, não complicar.",
    icon: PiHeartBold,
    layout: "lg:col-span-2 lg:col-start-5",
  },
  {
    label: "Engenharia com Significado ⚙️",
    headline: "Design, lógica e propósito na mesma entrega.",
    description:
      "Unimos design estratégico, arquitetura sólida e visão de longo prazo. Não fazemos sites para hoje — criamos estruturas que evoluem com o tempo.",
    icon: PiGearSixBold,
    layout: "lg:col-span-2 lg:col-start-2 lg:row-start-2",
  },
  {
    label: "Relação Contínua 🌀",
    headline: "A gente não some depois do deploy.",
    description:
      "Seguimos por perto, orientando e celebrando com você. Nosso compromisso não termina na entrega — termina quando o projeto floresce.",
    icon: PiSpiralBold,
    layout: "lg:col-span-2 lg:col-start-4 lg:row-start-2",
  },
];

const fadeUpStyle = (delay: number): CSSProperties => ({
  animation: "fadeUp 0.85s ease-out forwards",
  animationDelay: `${delay}s`,
});

export function AboutSection() {
  return (
    <section
      id="AboutUsSection"
      className="flex flex-col overflow-hidden bg-[color:var(--color-bg-light)] py-24 dark:bg-[color:var(--color-bg-dark)] sm:py-28 lg:py-32"
    >
      <Container variant="full" className="flex flex-col items-center gap-16">
        <div
          className="flex max-w-4xl flex-col items-center gap-5 text-center md:gap-6"
          style={fadeUpStyle(0.05)}
        >
          <span className="rounded-full border border-white/10 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-gray-600 dark:border-white/20 dark:bg-white/10 dark:text-white/60">
            Manifesto CROMOS
          </span>
          <h2 className="text-balance font-headline text-3xl text-gray-900 sm:text-4xl md:text-[3rem] md:leading-[1.05] dark:text-white">
            Antes de entregar código, a gente entrega confiança.
          </h2>
          <p className="text-pretty font-sans text-base text-gray-600 sm:text-lg dark:text-[color:var(--color-gray-300)]">
            Cada projeto da CROMOS nasce de propósito e termina em autonomia.
            Nosso diferencial está na forma como unimos empatia, engenharia e inteligência.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 text-center" style={fadeUpStyle(0.15)}>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-gray-500 dark:text-white/60">
            Nossos diferenciais
          </p>
          <p className="mx-auto max-w-3xl text-pretty font-sans text-sm text-gray-500 dark:text-[color:var(--color-gray-400)] sm:text-base">
            Os pilares que guiam o jeito CROMOS de criar equilibram performance e humanidade:
            liberdade, inteligência aplicada, cuidado, engenharia e parceria contínua.
          </p>
        </div>

        <ul
          className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8"
          style={fadeUpStyle(0.25)}
        >
          {DIFFERENTIALS.map((item, index) => (
            <AboutDifferentialCard
              key={item.label}
              label={item.label}
              headline={item.headline}
              description={item.description}
              icon={item.icon}
              layout={item.layout}
              index={index}
              baseDelay={0.3}
              fadeUpStyle={fadeUpStyle}
            />
          ))}
        </ul>

        <div
          className="flex flex-col items-center gap-6 text-center"
          style={fadeUpStyle(0.78)}
        >
          <p className="text-pretty font-sans text-base text-gray-600 dark:text-[color:var(--color-gray-300)] sm:text-lg">
            Pronto para construir algo que dure e evolua com você?
          </p>
          <CtaButton
            href="https://wa.me/message/ACFRONES45HZM1"
            className="px-8"
            target="_blank"
          >
            Agendar conversa
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
