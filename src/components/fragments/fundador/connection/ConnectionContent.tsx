"use client";

import { motion } from "framer-motion";

export function ConnectionContent() {
  return (
    <motion.div
      className="max-w-2xl text-white/80"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        Fundador da Chromos
      </p>
      <h3 className="mt-4 font-headline text-3xl text-white sm:text-4xl">
        Tecnologia sob demanda com propósito e impacto
      </h3>
      <p className="mt-5 text-base sm:text-lg">
        A Chromos nasceu da vontade de criar soluções sob demanda com propósito e impacto. Hoje, lidero o time de
        desenvolvimento e experiência da agência, transformando ideias em produtos digitais completos — de startups
        a grandes empresas.
      </p>
    </motion.div>
  );
}
