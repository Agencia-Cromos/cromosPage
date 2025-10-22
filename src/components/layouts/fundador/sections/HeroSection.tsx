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
      className="relative overflow-hidden bg-[color:var(--color-bg,#0A0E17)]"
    >
      <HeroBackground />
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,_rgba(255,255,255,0.08)_0%,_rgba(22,34,56,0.46)_58%,_rgba(10,15,31,0.88)_100%)]"
      />
      <div className="relative z-20 mx-auto flex min-h-[110vh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-[24vh] text-left text-white sm:pb-20 sm:pt-[20vh] lg:pb-[108px] lg:pt-[10vh]">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="order-1 w-full lg:order-2 lg:flex-1">
            <HeroPortrait />
          </div>
          <motion.div
            style={{ y: textOffset }}
            className="order-2 relative z-[20] mt-6 flex w-full flex-col gap-10 rounded-[28px] bg-[#050A16]/45 p-6 backdrop-blur-md sm:mt-8 sm:p-8 lg:order-1 lg:mt-0 lg:max-w-[520px] lg:bg-transparent lg:p-0 lg:backdrop-blur-0"
          >
            <HeroHeading />
            <HeroActions />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
