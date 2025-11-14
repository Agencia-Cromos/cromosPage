import Image from "next/image";

import codePattern from "@/assets/code-pattern.svg";

export function ProjectsHeroVisual() {
  return (
    <div className="relative flex w-full max-w-[480px] items-center justify-center">
      <div className="absolute inset-0 -translate-y-10 scale-110 bg-[radial-gradient(circle_at_40%_20%,rgba(109,151,255,0.22),rgba(109,151,255,0)_60%)] blur-3xl opacity-80" />
      <div className="absolute inset-0 translate-y-10 bg-[radial-gradient(circle_at_60%_80%,rgba(92,224,255,0.18),rgba(92,224,255,0)_55%)] blur-3xl opacity-70" />

      <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[2.8rem] border border-white/10 bg-[rgba(12,20,38,0.55)] p-6 shadow-[0_30px_120px_rgba(8,18,32,0.55)] backdrop-blur-[18px] animate-[float_9s_ease-in-out_infinite]">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.16),rgba(255,255,255,0)_60%)] opacity-80" />
        <div className="absolute inset-0 mix-blend-screen opacity-80">
          <Image
            src={codePattern}
            alt="Interface de codigo representando os projetos da Cromos"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </div>
  );
}
