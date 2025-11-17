"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useNavigationLoader } from "@/components/common/NavigationLoader";

export function ProjectsCta() {
  const navigation = useNavigationLoader();

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <Link
        href="/projetos"
        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,_rgba(76,159,255,0.95),_rgba(122,228,255,0.75),_rgba(255,215,120,0.9))] px-6 py-3 text-sm font-semibold text-[#061020] shadow-[0_16px_36px_rgba(76,159,255,0.35)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_44px_rgba(255,215,120,0.35)]"
        onClick={() => {
          navigation?.startNavigation();
        }}
      >
        Ver principais projetos
      </Link>
    </motion.div>
  );
}
