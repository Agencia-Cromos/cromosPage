"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import mockShowcase from "@/assets/mocks/mock_5ofc.svg";
import { ConnectionBrand } from "@/components/fragments/fundador/connection/ConnectionBrand";
import { ConnectionContent } from "@/components/fragments/fundador/connection/ConnectionContent";
import { ConnectionCta } from "@/components/fragments/fundador/connection/ConnectionCta";

export function ConnectionSection() {
  return (
    <section
      id="connection"
      className="relative overflow-hidden bg-[color:var(--color-bg-light,#0F172A)] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(122,228,255,0.18),_rgba(15,20,34,0.95))]" />
      <div className="pointer-events-none absolute -left-[12%] top-[6%] hidden h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,_rgba(76,159,255,0.22),_transparent_75%)] blur-3xl opacity-70 lg:block" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[560px]"
        >
          <Image
            src={mockShowcase}
            alt="Projetos construidos pela Agencia Cromos"
            priority
            sizes="(min-width: 1280px) 36vw, 90vw"
            className="h-auto w-full rounded-[42px] object-cover "
          />
        </motion.div>

        <div className="relative flex w-full max-w-xl flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <ConnectionBrand />
          <ConnectionContent />
          <ConnectionCta />
        </div>
      </div>
    </section>
  );
}

