"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/common/logo";

export function ConnectionBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Logo className="h-16 w-auto justify-center" />
    </motion.div>
  );
}
