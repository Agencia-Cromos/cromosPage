import { Container } from "@/components/common/container";
import { TestimonialCard } from "@/components/fragments/landingPage/testimonials/TestimonialCard";


type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Costa",
    role: "CEO - Vision Tech Group",
    quote:
      "A equipe da CROMOS entendeu nossa dor de forma cirurgica e entregou um sistema que revolucionou nossa operacao.",
  },
  {
    name: "Lucas Andrade",
    role: "Fundador - SmartGo Logistics",
    quote:
      "Raros profissionais com tanto comprometimento e clareza tecnica. A entrega foi rapida, bonita e funcional.",
  },
  {
    name: "Rafael Monteiro",
    role: "Diretor - Infinity Solutions",
    quote:
      "Confiei a CROMOS nosso portal principal, e o resultado superou as expectativas. Atendimento e tecnologia de ponta.",
  },
];

const fadeUp = (delay: number) => ({
  animation: "fadeUp 0.85s ease-out forwards",
  animationDelay: `${delay}s`,
});

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#05080E] py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#05080E]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(125deg,_rgba(250,204,21,0.4)_0%,_rgba(34,44,72,0.82)_50%,_rgba(5,8,14,0.96)_100%)]" />
      <div className="pointer-events-none absolute -inset-x-24 -top-56 -z-5 h-[480px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,159,255,0.12)_0%,_rgba(9,18,40,0)_70%)] blur-3xl" />
      <Container variant="default" className="mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl" style={fadeUp(0.05)}>
          <p className="font-headline text-4xl text-white sm:text-5xl">O que dizem sobre nos</p>
          <p className="mt-4 text-pretty font-sans text-base text-gray-400 sm:text-lg">
            Clientes que confiaram na CROMOS e tiveram resultados reais.
          </p>
        </div>

        <div className="mt-12 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3" aria-live="polite">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.name} style={fadeUp(0.18 + index * 0.08)}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <p
          className="mt-12 max-w-xl text-pretty text-sm text-gray-500 sm:text-base"
          style={fadeUp(0.46)}
        >
          Cada parceria e construida com empatia, proposito e inovacao.
        </p>
      </Container>
    </section>
  );
}
