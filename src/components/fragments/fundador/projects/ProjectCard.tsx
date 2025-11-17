"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string;
  index: number;
};

export function ProjectCard({
  title,
  description,
  stack,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left shadow-[0_20px_55px_rgba(10,20,40,0.45)] transition duration-500 hover:-translate-y-2 hover:border-[color:var(--color-secondary,#FFD778)]/60 hover:shadow-[0_28px_70px_rgba(124,228,255,0.4)]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(76,159,255,0.18),_transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-6 top-6 -z-10 h-32 rounded-3xl bg-[linear-gradient(120deg,_rgba(76,159,255,0.25),_rgba(255,215,120,0.16))] blur-3xl opacity-0 transition group-hover:opacity-100" />
      <h3 className="font-headline text-xl text-white">{title}</h3>
      <p className="mt-3 text-sm text-white/65 sm:text-base">{description}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-gray,#FFD778)]/80">
        {stack}
      </p>
    </motion.article>
  );
}

