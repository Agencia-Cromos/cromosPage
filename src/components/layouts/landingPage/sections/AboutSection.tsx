import { Container } from "@/components/common/container";
import { CtaButton } from "@/components/common/CtaButton";

type Principle = {
  title: string;
  paragraphs: string[];
};

const PRINCIPLES: Principle[] = [
  {
    title: "Como trabalhamos",
    paragraphs: [
      "Com transparencia, escuta e presença.",
      "Antes de qualquer linha de código, a gente mergulha no seu contexto — entende o que você vive, qual sua meta e o que realmente importa agora.",
      "Não criamos projetos comuns, criamos sentido. Cada entrega nasce pra acompanhar o ritmo da sua história.",
    ],
  },
  {
    title: "Por que trabalhamos assim",
    paragraphs: [
      "Porque acreditamos que tecnologia só tem valor quando aproxima pessoas.",
      "Nosso papel não é automatizar o que é humano, mas tornar o humano mais leve, mais livre, mais produtivo.",
      "Quando um projeto flui, o cliente sente: “fui compreendido”. É isso que move a gente — ver propósito virar resultado.",
    ],
  },
  {
    title: "Quando trabalhamos",
    paragraphs: [
      "Quando existe conexão, e não apenas contrato.",
      "Entramos quando a gente enxerga futuro no que você está construindo. E seguimos juntos depois, ajustando, melhorando, celebrando.",
      "Não é uma entrega — é uma caminhada lado a lado, com a tranquilidade de saber que alguém está ali, de verdade.",
    ],
  },
];

const fadeUpStyle = (delay: number) => ({
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
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <span
            className="rounded-full border border-white/10 bg-white/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-gray-600 dark:border-white/20 dark:bg-white/10 dark:text-white/70"
            style={fadeUpStyle(0.05)}
          >
            Sobre nós
          </span>
          <h2
            className="text-balance font-headline text-3xl text-gray-900 sm:text-4xl md:text-[3.2rem] md:leading-[1.05] dark:text-white"
            style={fadeUpStyle(0.1)}
          >
            Nosso clientes transformam tecnologia em resultado real
          </h2>
          <p
            className="text-pretty font-sans text-base text-gray-500 sm:text-lg dark:text-[color:var(--color-gray-400)]"
            style={fadeUpStyle(0.2)}
          >
            Na CROMOS, cada projeto nasce de conexão. A gente entende o que o
            cliente sabe e, só então, criamos soluções sob medida que realmente
            resolvem seus problemas.
          </p>
        </div>

        <ul
          className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          style={fadeUpStyle(0.25)}
        >
          {PRINCIPLES.map((item, index) => (
            <li
              key={item.title}
              className="group flex h-full flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.07] p-8 text-left shadow-[0_22px_60px_rgba(20,34,59,0.26)] transition duration-300 ease-out hover:-translate-y-2 hover:border-white/35 hover:bg-white/[0.14] hover:shadow-[0_36px_90px_rgba(76,159,255,0.35)] dark:border-white/10 dark:bg-white/5"
              style={fadeUpStyle(0.32 + index * 0.1)}
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4C9FFF] via-[#7AE4FF] to-[#FFD778] font-headline text-2xl text-gray-900 shadow-[0_18px_30px_rgba(76,159,255,0.35)] dark:text-[#0A1224]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-headline text-xl text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-500 dark:text-[color:var(--color-gray-400)]">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div
          className="flex flex-col items-center gap-6 text-center"
          style={fadeUpStyle(0.7)}
        >
          <p className="text-pretty font-sans text-base text-gray-600 dark:text-[color:var(--color-gray-300)] sm:text-lg">
            Pronto pra criar algo que realmente faça sentido para o seu negócio?
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
