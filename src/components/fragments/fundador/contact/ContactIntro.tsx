"use client";

import { motion } from "framer-motion";

export function ContactIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
        Vamos conversar?
      </span>
      <h3 className="mt-4 font-headline text-3xl sm:text-4xl">Estou pronto para construir com você</h3>
      <p className="mt-4 text-base text-white/70 sm:text-lg">
        Estou sempre aberto a novas ideias, projetos e colaborações. Se quiser discutir uma oportunidade, trocar
        conhecimento ou construir algo do zero — me chama:
      </p>
    </motion.div>
  );
}
