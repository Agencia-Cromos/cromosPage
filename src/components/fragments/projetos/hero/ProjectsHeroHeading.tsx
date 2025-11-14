"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ProjectsHeroHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <motion.div ref={ref} style={{ y }} className="flex flex-col items-start gap-6 text-left">
      <span className="inline-flex items-center rounded-full border border-[#6f63ff]/20 bg-[#6f63ff]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.38em] text-[#a792ff]">
        Projetos
      </span>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-semibold leading-[1.12] text-white sm:text-[2.9rem] sm:leading-[1.08]"
      >
        Cases que mostram como tecnologia e design se conectam com pessoas reais.
      </motion.h1>
      <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
        Selecionamos projetos que ampliam impacto social, fortalecem negocios locais e contam historias com
        proposito. Aqui voce encontra uma amostra do que entregamos como parceira de produto, design e estrategia
        digital.
      </p>
    </motion.div>
  );
}
