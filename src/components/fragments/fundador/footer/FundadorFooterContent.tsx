"use client";

import { motion } from "framer-motion";

export function FundadorFooterContent() {
  return (
    <motion.div
      className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 text-center text-xs text-white/50 sm:text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p>&copy; 2025 Natã Spitz Alves — Desenvolvedor &amp; UX Designer</p>
      <p>Parte do ecossistema Chromos 🌐</p>
    </motion.div>
  );
}
