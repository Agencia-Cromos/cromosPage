"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroBackground } from "@/components/fragments/fundador/hero/HeroBackground";
import { HeroHeading } from "@/components/fragments/fundador/hero/HeroHeading";
import { HeroActions } from "@/components/fragments/fundador/hero/HeroActions";
import { HeroPortrait } from "@/components/fragments/fundador/hero/HeroPortrait";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOffset = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.7]);

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative overflow-hidden bg-[#050A16]"
    >
      <HeroPortrait />
      <HeroBackground />
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,10,22,0.05)_0%,_rgba(5,10,22,0.45)_45%,_rgba(5,10,22,0.92)_90%)]"
      />

      <div className="relative z-20 mx-auto flex min-h-[110vh] w-full max-w-5xl flex-col justify-end px-6 pb-24 pt-[28vh] text-left text-white sm:pb-28 sm:pt-[24vh] lg:pb-[120px] lg:pt-[20vh]">
        <motion.div
          style={{ y: textOffset }}
          className="flex flex-col gap-10 rounded-[28px] bg-[#050A16]/45 p-6 backdrop-blur-md sm:p-8 lg:max-w-3xl lg:bg-transparent lg:p-0 lg:backdrop-blur-0"
        >
          <HeroHeading />
          <HeroActions />
        </motion.div>
      </div>
    </section>
  );
}
