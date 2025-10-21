"use client";

import { motion } from "framer-motion";

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
        <motion.div
          key={card.title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--color-primary,#4C9FFF)]/60 hover:shadow-[0_25px_60px_rgba(76,159,255,0.3)]"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.12),_transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <h3 className="font-headline text-xl text-white">{card.title}</h3>
          <p className="mt-4 text-sm text-white/65 sm:text-base">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
