"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { RealSizeImage } from "@/components/fragments/projetos/common/RealSizeImage";
import { StatusBadge } from "@/components/fragments/projetos/common/StatusBadge";
import { TechChips } from "@/components/fragments/projetos/common/TechChips";
import type { Project, GalleryItem } from "@/types/projects";
import projectsData from "@/files/projects.json";
import { PiDeviceMobile, PiMonitor, PiGlobe, PiAndroidLogo, PiAppleLogo } from "react-icons/pi";
// icon set only used in detail page; not needed here

// Types moved to @/types/projects

// Map JSON types to human-friendly labels and filter categories
const TYPE_LABEL: Record<string, string> = {
  website: "Website",
  web_system: "Sistema Web",
  web_app: "Aplicativo Web",
  mobile_app: "Aplicativo",
};

type FilterKey = "all" | "website" | "web_system" | "web_app" | "mobile_app" | "landing";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "website", label: "Websites" },
  { key: "web_system", label: "Sistemas Web" },
  { key: "mobile_app", label: "Aplicativos" },
  { key: "landing", label: "Landing Pages" },
];

function isLandingProject(p: Project) {
  return p.id?.startsWith("landing-") || /landing\s?page/i.test(p.title || "");
}

// Asset resolver moved to fragment dependency

// StatusBadge extracted to fragment

// TechChips extracted to fragment

// TechIcon not used here; defined in detail page

// SmartImage removed; prefer RealSizeImage + Next public assets

// Always render at natural size without cropping; constrain only by max viewport and allow scroll
// RealSizeImage extracted to fragment

function SingleGallery({ project }: { project: Project }) {
  // Card deve mostrar apenas a imagem principal (cover) em tamanho real, com rolagem se exceder.
  const cover = project.media?.cover;
  if (!cover) return null;
  const title = project.title;
  const isMobileApp = project.type === "mobile_app";
  const maxH = isMobileApp ? "520px" : "none";
  return (
    <div className="relative w-full overflow-auto border border-white/10 bg-[rgba(9,16,28,0.65)] p-4 shadow-[0_30px_120px_rgba(8,18,32,0.45)]">
      <div className="relative inline-block">
        <RealSizeImage src={cover} alt={title} className="object-contain" maxW="100%" maxH={maxH} />
      </div>
    </div>
  );
}

function MultiGallery({ project }: { project: Project }) {
  const items = project.media?.gallery?.items || [];
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const width = el.clientWidth;
      const x = el.scrollLeft;
      const approxItemW = Math.max(1, width / 3); // aproxima 3 visíveis no desktop
      const idx = Math.round(x / approxItemW);
      setActive(Math.min(items.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pl-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it, i) => (
          <div key={i} className="relative inline-block snap-start border border-white/10 bg-[rgba(9,16,28,0.65)] p-4">
            <RealSizeImage src={it.src} alt={it.alt || project.title} className="object-contain" maxH="260px" />
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <span key={i} className={`h-1.5 w-1.5 rounded-full transition-all ${i === active ? "bg-white/80 scale-110" : "bg-white/30"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function accentColor(status: string) {
  return status === "Entregue" ? "#8fdfff" : "#a792ff";
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [loading, setLoading] = useState(false);
  const isRight = index % 2 === 1;

  const numberLabel = String(index + 1).padStart(2, "0");
  const typeLabel = isLandingProject(project)
    ? "Landing Page"
    : TYPE_LABEL[project.type] || project.type;

  // No card, sempre mostrar apenas a imagem principal (cover)
  const Gallery = SingleGallery;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[rgba(8,14,26,0.6)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_120px_rgba(3,7,16,0.55)] backdrop-blur-xl sm:p-10"
      style={{
        backgroundImage:
          `radial-gradient(circle at ${isRight ? "82%" : "18%"} 12%, rgba(122,225,255,0.14), rgba(9,15,26,0) 62%)`,
      }}
    >
      <div className={`relative flex flex-col items-center gap-8 lg:flex-row ${isRight ? "lg:flex-row-reverse" : ""}`}>
        {/* Text side */}
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/35">
              {numberLabel}. {typeLabel}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-[2.2rem]">
            {project.title}
          </h3>
          <p className="mt-2 text-lg text-white">
            {project.subtitleMain}{" "}
            <span style={{ color: accentColor(project.status) }}>{project.subtitleAccent}</span>
          </p>

          {project.descriptionShort && (
            <p className="mt-5 max-w-prose text-base leading-relaxed text-white/70">
              {project.descriptionShort}
            </p>
          )}

          <TechChips items={project.techStack?.primary || []} />

          {project.objective && (
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/65">{project.objective}</p>
          )}

          <div className="mt-6">
            <Link
              href={`/projetos/${encodeURIComponent(project.id)}`}
              onClick={() => setLoading(true)}
              className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2c64ff] to-[#7a5bff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(45,100,255,0.35)] transition-transform duration-300 hover:translate-y-[-1px] ${loading ? 'opacity-80' : ''}`}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Abrindo…
                </>
              ) : (
                <>
                  Ver Detalhes
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </>
              )}
            </Link>
          </div>
        </div>

        {/* Visual side */}
        <div className="w-full md:w-[80%] lg:w-full">
          <Gallery project={project} />
        </div>
      </div>
    </motion.article>
  );
}

// Modal removido em favor de página dedicada por projeto

export function ProjectsHubSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const allProjects = (projectsData as { projects: Project[] }).projects || [];

  const filtered = useMemo(() => {
    if (activeFilter === "all") return allProjects;
    if (activeFilter === "landing") return allProjects.filter((p) => isLandingProject(p));
    if (activeFilter === "website") return allProjects.filter((p) => p.type === "website" && !isLandingProject(p));
    return allProjects.filter((p) => p.type === activeFilter);
  }, [activeFilter, allProjects]);

  // Progress line based on visible index
  const [visibleIndex, setVisibleIndex] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = refs.current.findIndex((el) => el === visible.target);
          if (idx >= 0) setVisibleIndex(idx);
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const progress = filtered.length > 1 ? visibleIndex / (filtered.length - 1) : 1;

  // Modal removido: sem bloqueio de scroll de fundo

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#03060d_0%,#040710_60%,#050b16_100%)] py-20 sm:py-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(122,228,255,0.18),rgba(122,228,255,0))] blur-[120px]" />
        <div className="absolute right-[12%] bottom-[14%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(162,129,255,0.18),rgba(162,129,255,0))] blur-[100px]" />
      </div>

      <Container variant="wide" className="relative z-10">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur transition-colors ${
                activeFilter === f.key
                  ? "border-white/30 bg-white/15 text-white"
                  : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
              }`}
              style={{
                backgroundImage:
                  activeFilter === f.key
                    ? "linear-gradient(90deg, rgba(44,100,255,0.35), rgba(122,91,255,0.28))"
                    : undefined,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Progress line */}
        <div className="pointer-events-none absolute left-3 top-0 hidden h-full w-1.5 rounded-full bg-white/5 lg:block">
          <div
            className="absolute left-0 top-0 h-0 w-full rounded-full bg-gradient-to-b from-[#7de1ff] to-[#a792ff]"
            style={{ height: `${Math.max(6, progress * 100)}%` }}
          />
        </div>

        {/* Cards */}
        <div className="relative z-10 flex flex-col gap-10">
          <AnimatePresence initial={false}>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-center text-lg text-white/85">
            Cada projeto é uma prova de que propósito e tecnologia caminham juntos.
          </p>
          <Link
            href="/projetos"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
          >
            Ver todos os projetos →
          </Link>
        </div>
      </Container>

      {/* Navegação para páginas de projeto via <Link>; modal removido */}
    </section>
  );
}
