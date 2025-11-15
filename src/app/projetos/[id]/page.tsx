"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import projectsData from "@/files/projects.json";
import { Container } from "@/components/common/container";
import { PiGlobe, PiAndroidLogo, PiAppleLogo } from "react-icons/pi";
import { StatusBadge } from "@/components/fragments/projetos/common/StatusBadge";
import { TechIcon } from "@/components/fragments/projetos/common/TechIcon";
import { RealSizeImage } from "@/components/fragments/projetos/common/RealSizeImage";
import type { Project, GalleryItem } from "@/types/projects";

// Reused fragments and types imported above

function isLandingProject(p: Project) {
  return p.id?.startsWith("landing-") || /landing\s?page/i.test(p.title || "");
}

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params.id);
  const allProjects = (projectsData as { projects: Project[] }).projects || [];
  const project = useMemo(() => allProjects.find((p) => p.id === id) || null, [allProjects, id]);

  const items = project?.media?.gallery?.items || [];
  const cover = project?.media?.cover;
  const slides: GalleryItem[] = [
    ...(cover ? [{ src: cover, alt: project?.title || "" }] : []),
    ...items,
  ];
  const isMobileApp = project?.type === "mobile_app";
  const pages: GalleryItem[][] = useMemo(() => {
    if (!isMobileApp) return slides.map((s) => [s]);
    const grouped: GalleryItem[][] = [];
    for (let i = 0; i < slides.length; i += 2) {
      grouped.push(slides.slice(i, i + 2));
    }
    return grouped;
  }, [slides, isMobileApp]);
  const [idx, setIdx] = useState(0);

  if (!project) {
    return (
      <section className="py-20">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white">
            <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
            <p className="mt-2 text-white/80">Verifique o link ou volte para a listagem.</p>
            <Link href="/projetos" className="mt-4 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15">
              ← Voltar para projetos
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const allowScrollPreview = isLandingProject(project) || project.type === "website";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#03060d_0%,#040710_60%,#050b16_100%)] py-10 sm:py-16">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(122,228,255,0.18),rgba(122,228,255,0))] blur-[120px]" />
        <div className="absolute right-[12%] bottom-[14%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(162,129,255,0.18),rgba(162,129,255,0))] blur-[100px]" />
      </div>

      <Container variant="wide" className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/projetos" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15">
            ← Voltar
          </Link>
          <StatusBadge status={project.status} />
        </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Image viewer (sem card, apenas área de imagem) */}
          <div className="flex flex-col p-0">
            <div className="flex items-start justify-center">
              {pages.length > 0 ? (
                <div className={`${allowScrollPreview ? "h-[80vh] overflow-y-auto" : ""} w-full`}>
                  <div className={`mx-auto flex w-full max-w-5xl items-start justify-center gap-4`}>
                    {pages[idx].map((img, i) => (
                      <RealSizeImage
                        key={i}
                        src={img.src}
                        alt={img.alt || project.title}
                        className="object-contain"
                        maxW={isMobileApp ? "48%" : "100%"}
                        maxH={allowScrollPreview ? "none" : "75vh"}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-white/70">Sem mídia</div>
              )}
            </div>
            {/* Buttons below (fora da área com scroll) */}
            {pages.length > 0 && (
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => setIdx((i) => (i - 1 + pages.length) % pages.length)}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                >
                  ‹ Anterior
                </button>
                <div className="flex items-center gap-2">
                  {pages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-1.5 w-1.5 rounded-full ${i === idx ? "bg-white/90" : "bg-white/35"}`}
                      aria-label={`Ir para slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIdx((i) => (i + 1) % pages.length)}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                >
                  Próximo ›
                </button>
              </div>
            )}
          </div>

          {/* Right: Description (sem card, deixa a página rolar) */}
          <div className="pr-1">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{project.title}</h1>
            <p className="mt-1 text-base text-white/85">
              {project.subtitleMain} <span className="text-[#8fdfff]">{project.subtitleAccent}</span>
            </p>

            {project.descriptionShort && (
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                {project.descriptionShort}
              </p>
            )}
            {project.objective && (
              <p className="mt-3 text-sm leading-relaxed text-white/70">{project.objective}</p>
            )}
            {project.descriptionLong && (
              <div className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                {project.descriptionLong}
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Tecnologias utilizadas
              </h4>
              <div className="mt-3 flex flex-col gap-3">
                {project.techStack?.primary?.length ? (
                  <div className="flex flex-wrap items-center gap-2 text-sm text-white/90">
                    <span className="mr-1">🟢 Principais:</span>
                    {project.techStack.primary.map((t) => (
                      <span key={t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1">
                        <TechIcon name={t} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                ) : null}
                {project.techStack?.secondary?.length ? (
                  <div className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                    <span className="mr-1">⚙️ Secundárias:</span>
                    {project.techStack.secondary.map((t) => (
                      <span key={t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        <TechIcon name={t} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            {(project.links?.website || project.links?.android || project.links?.ios) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links?.website && (
                  <Link
                    href={project.links.website}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    <PiGlobe /> Visitar site
                  </Link>
                )}
                {project.links?.android && (
                  <Link
                    href={project.links.android}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    <PiAndroidLogo /> Baixar no Android
                  </Link>
                )}
                {project.links?.ios && (
                  <Link
                    href={project.links.ios}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    <PiAppleLogo /> Baixar no iOS
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
