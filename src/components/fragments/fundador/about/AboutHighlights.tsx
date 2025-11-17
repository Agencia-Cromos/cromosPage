import { AboutHighlightCard } from "./AboutHighlightCard";

const HIGHLIGHTS = [
  {
    title: "Propósito",
    description:
      "Desenvolvo soluções digitais que conectam pessoas, marcas e ideias. Minha jornada combina tecnologia, design e comportamento humano, criando interfaces que resolvem problemas reais e geram resultado.",
  },
  {
    title: "Stack",
    description: "React • Next.js • TypeScript • Node.js • Python • UX/UI Design • IA aplicada",
  },
  {
    title: "Mentalidade",
    description:
      "Cada projeto é uma conversa entre lógica e emoção. Busco sempre compreender o usuário antes de escrever a primeira linha de código.",
  },
];

export function AboutHighlights() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {HIGHLIGHTS.map((card, index) => (
        <AboutHighlightCard
          key={card.title}
          title={card.title}
          description={card.description}
          index={index}
        />
      ))}
    </div>
  );
}
