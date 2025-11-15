"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300";

export function HeroActions() {
  return (
    <motion.div
      className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-start"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
    >
      <Link
        href="#projects"
        className={`${buttonBase} bg-[linear-gradient(120deg,_#4C9FFF_0%,_#7AE4FF_50%,_#FFD778_100%)] text-[color:var(--color-bg,#0A0E17)] shadow-[0_16px_40px_rgba(76,159,255,0.35)] hover:scale-[1.02] hover:shadow-[0_18px_46px_rgba(122,228,255,0.45)]`}
      >
        Ver meus projetos
      </Link>
      <Link
        href="/curriculo-nata.pdf"
        download
        className={`${buttonBase} border border-white/20 bg-white/10 text-white hover:bg-white/15 hover:shadow-[0_12px_32px_rgba(255,215,120,0.25)]`}
      >
        Baixar currículo
      </Link>
    </motion.div>
  );
}
