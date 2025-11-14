export function ProjectsHeroStatusBar() {
  return (
    <div className="mt-12 flex w-full flex-col gap-4">
      <div className="h-px w-full bg-[linear-gradient(90deg,rgba(104,158,255,0)_0%,rgba(104,158,255,0.65)_45%,rgba(161,123,255,0.65)_55%,rgba(161,123,255,0)_100%)]" />
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        Projetos criados com: <span className="text-[#7de1ff]">Cuidado</span> &#8226;{" "}
        <span className="text-[#a792ff]">Experiência</span> &#8226;{" "}
        <span className="text-white/70">Propósito</span>
      </p>
    </div>
  );
}
