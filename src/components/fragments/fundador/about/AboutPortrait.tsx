"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portraitImage from "@/assets/nata.jpeg";

export function AboutPortrait() {
  return (
    <motion.div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#060B18] shadow-[0_18px_48px_rgba(5,8,18,0.45)]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.22),_transparent_70%)] opacity-60" />
      <Image
        src={portraitImage}
        alt="Nata Spitz Alves trabalhando"
        fill
        sizes="(min-width: 1024px) 22vw, 60vw"
        className="object-cover object-top"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,10,22,0.2)_0%,_rgba(5,10,22,0.5)_65%,_rgba(5,10,22,0.85)_100%)]" />
      <div className="absolute bottom-4 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75 backdrop-blur">
        Construindo jornadas digitais
      </div>
    </motion.div>
  );
}
