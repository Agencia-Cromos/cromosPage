"use client";

import { motion } from "framer-motion";
import { AboutAtlasAudioBlock } from "./AboutAtlasAudioBlock";
import { AboutTechStackGrid } from "./AboutTechStackGrid";

export function AboutIntro() {
  const atlasAudioSrc = "/audios/Orus_Atlas.wav";

  return (
    <motion.div
      className="max-w-3xl text-left"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <h2 className="font-headline text-3xl text-white sm:text-4xl">Sobre mim</h2>
      <p className="mt-5 text-base text-white/70 sm:text-lg">
        Desenvolvo solu����es digitais que conectam pessoas, marcas e ideias. Minha jornada combina tecnologia,
        design e comportamento humano, criando interfaces que resolvem problemas reais e geram resultado.
      </p>

      <AboutAtlasAudioBlock audioSrc={atlasAudioSrc} />
      <AboutTechStackGrid />
    </motion.div>
  );
}

