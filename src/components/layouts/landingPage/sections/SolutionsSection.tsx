
import mockupBackground from "@/assets/mocks/mockup.png";
import { Container } from "@/components/common/container";
import { CtaButton } from "@/components/common/CtaButton";

type Solution = {
  title: string;
  description: string;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Sistemas Web Sob Demanda",
    description:
      "Plataformas completas criadas do zero para resolver dores específicas com tecnologia escalável.",
  },
  {
    title: "Aplicativos Personalizados",
    description:
      "Apps nativos e híbridos desenhados para operações que precisam de mobilidade e performance.",
  },
  {
    title: "Websites & Landing Pages",
    description:
      "Sites modernos com foco em presença digital, storytelling e conversão em múltiplos dispositivos.",
  },
  {
    title: "Integrações & Automação",
    description:
      "Fluxos que conectam sistemas, automatizam rotinas e tornam a operação mais inteligente.",
  },
];

const fadeUp = (delay: number) => ({
  animation: "fadeUp 0.85s ease-out forwards",
  animationDelay: `${delay}s`,
});

export function SolutionsSection() {
  return (
    <section id="solutionsSection" className="relative overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(165deg,_rgba(5,9,22,0.9)_0%,_rgba(12,20,44,0.85)_40%,_rgba(5,9,22,0.8)_100%)]" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${mockupBackground.src})` }}
      />

      <Container
        variant="default"
        className="mx-auto flex flex-col items-center gap-14 relative z-10"
      >
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2
            className="text-balance font-headline text-4xl text-white sm:text-5xl md:text-[3.1rem]"
            style={fadeUp(0.05)}
          >
            Soluções que moldamos para cada negócio
          </h2>
          <p
            className="max-w-2xl text-pretty font-sans text-base text-[color:var(--color-gray-300)] sm:text-lg"
            style={fadeUp(0.12)}
          >
            Da concepção ao código, criamos plataformas e aplicativos que traduzem a necessidade de cada
            cliente em experiências digitais reais.
          </p>
        </div>

        <ul className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((solution, index) => (
            <li
              key={solution.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1.5 hover:border-white/35 hover:bg-white/[0.16] hover:shadow-[0_20px_55px_rgba(76,159,255,0.3)]"
              style={fadeUp(0.2 + index * 0.08)}
            >
              <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-headline text-lg text-white">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-gray-200)]">
                {solution.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-8 pt-12 text-center" style={fadeUp(0.52)}>
          <p className="max-w-2xl text-pretty font-sans text-base text-[color:var(--color-gray-200)] sm:text-lg">
            Quer ver essas soluções em ação ou conhecer quem está por trás da CROMOS?
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <CtaButton href="/projetos" className="rounded-xl px-7 py-3 font-semibold">
              Conheça nossos projetos
            </CtaButton>
            <CtaButton
              href="/fundador"
              variant="secondary"
              className="rounded-xl border-white/20 px-7 py-3 font-semibold text-white/80 hover:text-white"
            >
              Conheça o fundador
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
