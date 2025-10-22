"use client";

import { motion } from "framer-motion";
import { SiElectron, SiNextdotjs, SiReact } from "react-icons/si";

export function AboutIntro() {
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
        Desenvolvo solucoes digitais que conectam pessoas, marcas e ideias. Minha jornada combina tecnologia,
        design e comportamento humano, criando interfaces que resolvem problemas reais e geram resultado.
      </p>

      <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_40px_rgba(6,10,22,0.35)] backdrop-blur sm:p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          Desenvolvedor web e mobile
        </span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-semibold text-white/85">Next.js</span>
              <span className="text-xs text-white/55">SSR otimizado</span>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-[0_10px_22px_rgba(76,159,255,0.32)]">
              <SiNextdotjs className="text-lg text-white" />
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-semibold text-white/85">React.js</span>
              <span className="text-xs text-white/55">UI reativa</span>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-[0_10px_22px_rgba(97,218,251,0.35)]">
              <SiReact className="text-lg text-[#61DAFB]" />
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-semibold text-white/85">React Native</span>
              <span className="text-xs text-white/55">Apps móveis</span>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-[0_10px_22px_rgba(0,180,216,0.35)]">
              <SiReact className="text-lg text-[#00B4D8]" />
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-semibold text-white/85">Electron</span>
              <span className="text-xs text-white/55">Desktop sólido</span>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-[0_10px_22px_rgba(136,192,247,0.35)]">
              <SiElectron className="text-lg text-[#88C0F7]" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
