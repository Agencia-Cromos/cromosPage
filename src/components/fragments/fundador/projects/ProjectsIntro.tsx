"use client";

import { motion } from "framer-motion";

export function ProjectsIntro() {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="font-headline text-3xl text-white sm:text-4xl">
        Projetos que transformaram ideias em produto
      </h2>
      <p className="mt-4 text-base text-white/65 sm:text-lg">
        Seleção de entregas estratégicas com foco em impacto, experiência e consistência técnica.
      </p>
    </motion.div>
  );
}
