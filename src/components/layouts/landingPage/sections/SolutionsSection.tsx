import mockupBackground from "@/assets/mocks/mockup.png";
import linkBioMock from "@/assets/mocks/linkBio.png";
import landingPageMock from "@/assets/mocks/landingPage.png";
import systemMock from "@/assets/mocks/system.png";
import appMock from "@/assets/mocks/app.png";
import { Container } from "@/components/common/container";
import { CtaButton } from "@/components/common/CtaButton";
import { SolutionCard } from "@/components/fragments/landingPage/solutions/SolutionCard";
import type { StaticImageData } from "next/image";

type Solution = {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    className: string;
    mobileClassName: string;
  };
  layout: "image-left" | "image-right";
  containerClass: string;
  backgroundClass: string;
  overlayClass?: string;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Links de Bio para Redes Sociais",
    description:
      "Muita gente perde clientes por um detalhe simples: o público até encontra o perfil, mas não sabe pra onde ir depois. Os links de bio da CROMOS reúnem tudo o que importa — WhatsApp, Instagram, Google Maps, catálogo e agendamentos — em um só lugar, bonito e funcional. Assim seu negócio ganha clareza, profissionalismo e se torna impossível de ignorar.",
    image: {
      src: linkBioMock,
      alt: "Mockup de link na bio CROMOS",
      className:
        "right-[-4rem] top-1/2 w-40 sm:w-56 md:w-72 lg:w-[20rem] -translate-y-1/2 rotate-[8deg] drop-shadow-[0_48px_130px_rgba(88,156,255,0.6)]",
      mobileClassName: "w-48 rotate-[7deg] drop-shadow-[0_28px_80px_rgba(88,156,255,0.48)]",
    },
    layout: "image-right",
    containerClass: "lg:mr-20",
    backgroundClass: "from-[#131418]/95 via-[#0c0d11]/97 to-[#060607]/99",
  },
  {
    title: "Websites e Landing Pages",
    description:
      "A internet está cheia de empresas boas que ninguém leva a sério. Um site bem planejado é a diferença entre \"parece amador\" e \"quero comprar\". Criamos páginas que contam sua história, mostram seu valor e transformam visitas em resultados reais. Porque confiança também se constrói com pixels.",
    image: {
      src: landingPageMock,
      alt: "Mockup de landing page da CROMOS",
      className:
        "left-[-4rem] top-8 w-52 sm:w-64 md:w-72 lg:w-80 -rotate-[2.5deg] drop-shadow-[0_32px_120px_rgba(120,185,255,0.45)]",
      mobileClassName: "w-64 -rotate-[2deg] drop-shadow-[0_28px_90px_rgba(120,185,255,0.35)]",
    },
    layout: "image-left",
    containerClass: "lg:ml-16",
    backgroundClass: "from-[#121317]/94 via-[#0b0c10]/97 to-[#050507]/99",
  },
  {
    title: "Sistemas Web Sob Demanda",
    description:
      "Toda empresa que cresce demais acaba sofrendo com o caos: planilhas que travam, processos perdidos, tarefas sem dono. Desenvolvemos sistemas sob medida que automatizam o que rouba seu tempo e organizam o que ninguém mais consegue acompanhar. É gestão com controle, agilidade e uma estrutura que trabalha junto com você — não contra.",
    image: {
      src: systemMock,
      alt: "Mockup de sistema web sob demanda",
      className:
        "right-[-4.5rem] top-[42%] w-60 sm:w-72 md:w-80 lg:w-96 -translate-y-1/2 drop-shadow-[0_45px_140px_rgba(116,205,255,0.42)]",
      mobileClassName: "w-64 drop-shadow-[0_30px_110px_rgba(116,205,255,0.32)]",
    },
    layout: "image-right",
    containerClass: "lg:mr-24",
    backgroundClass: "from-[#171820]/94 via-[#0d0f16]/97 to-[#050609]/99",
    overlayClass: "bg-[radial-gradient(circle_at_center,rgba(112,160,255,0.18),transparent_70%)]",
  },
  {
    title: "Aplicativos Personalizados (Nativos ou PWA)",
    description:
      "Hoje, quem não está no celular simplesmente não existe para o cliente. Criamos aplicativos nativos e PWAs que refletem a alma da sua marca e facilitam a vida de quem usa. Presença, praticidade e conexão constante para o seu negócio caber no bolso de quem te escolhe.",
    image: {
      src: appMock,
      alt: "Mockup de aplicativo personalizado",
      className:
        "left-[-4.2rem] top-1/2 w-40 sm:w-58 md:w-72 lg:w-[20rem] -translate-y-1/2 -rotate-[10deg] drop-shadow-[0_54px_140px_rgba(255,162,102,0.62)]",
      mobileClassName: "w-48 -rotate-[8deg] drop-shadow-[0_34px_125px_rgba(255,162,102,0.5)]",
    },
    layout: "image-left",
    containerClass: "lg:ml-12",
    backgroundClass: "from-[#1d1824]/94 via-[#110d18]/97 to-[#07060a]/99",
  },
];

const fadeUp = (delay: number) => ({
  animation: "fadeUp 0.85s ease-out forwards",
  animationDelay: `${delay}s`,
});

export function SolutionsSection() {
  return (
    <section id="solutionsSection" className="relative overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(168deg,#020203_0%,#050608_42%,#0a0b11_74%,#14131a_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_20%,rgba(42,46,60,0.24),transparent_58%),radial-gradient(circle_at_78%_18%,rgba(60,56,72,0.2),transparent_60%),radial-gradient(circle_at_52%_82%,rgba(48,56,68,0.16),transparent_54%)]" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.28]"
        style={{ backgroundImage: `url(${mockupBackground.src})` }}
      />

      <Container variant="full" className="relative z-10 mx-auto flex flex-col items-center gap-16">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2
            className="text-balance font-headline text-4xl text-white sm:text-5xl md:text-[3.1rem]"
            style={fadeUp(0.05)}
          >
            Nossas soluções que vão resolver os seus problemas
          </h2>
          <p
            className="max-w-2xl text-pretty font-sans text-base text-[color:var(--color-gray-300)] sm:text-lg"
            style={fadeUp(0.12)}
          >
            Do primeiro clique ao pós-venda, criamos experiências digitais que eliminam atritos e aproximam
            pessoas do seu negócio.
          </p>
        </div>

        <ul className="flex w-full flex-col gap-12">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              index={index}
              title={solution.title}
              description={solution.description}
              image={solution.image}
              layout={solution.layout}
              containerClass={solution.containerClass}
              backgroundClass={solution.backgroundClass}
              overlayClass={solution.overlayClass}
              fadeUpStyle={fadeUp}
            />
          ))}
        </ul>

        <div className="flex flex-col items-center gap-8 pt-12 text-center" style={fadeUp(0.65)}>
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
