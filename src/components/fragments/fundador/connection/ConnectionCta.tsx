"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ConnectionCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-white/40 hover:bg-white/20 hover:shadow-[0_16px_36px_rgba(255,215,120,0.25)]"
      >
        Conheça a Chromos →
      </Link>
    </motion.div>
  );
}
