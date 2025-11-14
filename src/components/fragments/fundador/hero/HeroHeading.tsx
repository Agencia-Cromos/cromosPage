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
        Portfólio
      </motion.span>

      <motion.h1
        className="font-headline text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      >
        Da idéia ao deploy — entrego interfaces com propósito.
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
      >
        Sou Natã Spitz Alves, front-end developer especializado em React, Next.js e React Native. 
        Tenho olhar de designer e mente de estrategista. Gosto de criar produtos digitais que 
        equilibram estética, usabilidade e resultado, com foco em transformar boas ideias 
        em soluções sólidas e escaláveis.
      </motion.p>
    </>
  );
}
