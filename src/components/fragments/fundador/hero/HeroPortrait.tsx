"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portraitImage from "@/assets/nata.jpeg";

export function HeroPortrait() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={{ scale: 1.05, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Image
        src={portraitImage}
        alt="Retrato de Nata Spitz Alves"
        fill
        priority
        sizes="100vw"
        className="h-full w-full object-cover object-center blur-sm sm:blur-0 sm:object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,10,22,0.45)_0%,_rgba(5,10,22,0.6)_38%,_rgba(5,10,22,0.95)_92%,_rgba(5,10,22,1)_100%)] sm:bg-[linear-gradient(180deg,_rgba(5,10,22,0.3)_0%,_rgba(5,10,22,0.4)_35%,_rgba(5,10,22,0.9)_88%,_rgba(5,10,22,1)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,_rgba(5,10,22,0.7)_0%,_rgba(5,10,22,0.45)_38%,_rgba(5,10,22,0.75)_100%)] sm:bg-[linear-gradient(90deg,_rgba(5,10,22,0.55)_0%,_rgba(5,10,22,0.35)_38%,_rgba(5,10,22,0.68)_100%)] lg:bg-transparent" />
    </motion.div>
  );
}
