"use client";

import { motion } from "framer-motion";

const LABEL = "Fundador da CROMOS";
const HEADING = "Tecnologia sob demanda com proposito e impacto";
const DESCRIPTION =
  "A CROMOS nasceu da vontade de criar solucoes sob demanda com proposito e impacto. Hoje, lidero o time de desenvolvimento e experiencia da agencia, transformando ideias em produtos digitais completos para startups e grandes empresas.";

export function ConnectionHeading() {
  return (
    <motion.div
      className="max-w-2xl text-white/80 text-center lg:text-left"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">{LABEL}</p>
      <h3 className="mt-4 font-headline text-3xl text-white sm:text-4xl">{HEADING}</h3>
    </motion.div>
  );
}

export function ConnectionDescription() {
  return (
    <motion.p
      className="max-w-2xl text-base text-white/75 text-center sm:text-lg lg:text-left"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
    >
      {DESCRIPTION}
    </motion.p>
  );
}
