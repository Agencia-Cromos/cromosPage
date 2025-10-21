"use client";

import { motion } from "framer-motion";

export function HeroHeading() {
  return (
    <>
      <motion.span
        className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/60"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        Portfólio do Fundador
      </motion.span>

      <motion.h1
        className="font-headline text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      >
        Transformo ideias em experiências digitais reais.
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
      >
        Sou Natã Spitz Alves, desenvolvedor front-end e designer de interfaces. Acredito que tecnologia só faz
        sentido quando aproxima pessoas. Por isso, dedico meu trabalho a criar soluções digitais sob medida —
        combinando propósito, estética e estratégia.
      </motion.p>
    </>
  );
}
