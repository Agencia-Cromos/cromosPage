import Image from "next/image";

import codePattern from "@/assets/code-pattern.svg";

type VisualTone = "cyan" | "violet" | "amber";

type ProjectsShowcaseItemProps = {
  index: number;
  title: string;
  subtitleMain: string;
  subtitleAccent: string;
  description: string;
  status: "Entregue" | "Em andamento" | "Em discovery";
  visualTone: VisualTone;
  align: "left" | "right";
};

const toneConfig: Record<VisualTone, { accent: string; glow: string }> = {
  cyan: {
    accent: "rgba(122, 225, 255, 0.16)",
    glow: "rgba(122, 225, 255, 0.35)",
  },
  violet: {
    accent: "rgba(167, 146, 255, 0.18)",
    glow: "rgba(167, 146, 255, 0.35)",
  },
  amber: {
    accent: "rgba(255, 183, 122, 0.16)",
    glow: "rgba(255, 183, 122, 0.32)",
  },
};

export function ProjectsShowcaseItem({
  index,
  title,
  subtitleMain,
  subtitleAccent,
  description,
  status,
  visualTone,
  align,
}: ProjectsShowcaseItemProps) {
  const isReversed = align === "right";
  const { accent, glow } = toneConfig[visualTone];
  const numberLabel = String(index + 1).padStart(2, "0");

  return (
    <section
      className="relative overflow-hidden rounded-[2.75rem] border border-white/8 bg-[rgba(8,14,26,0.65)] px-8 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_120px_rgba(3,7,16,0.65)] backdrop-blur-xl sm:px-12"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 48%), radial-gradient(circle at ${isReversed ? "85%" : "18%"} 12%, ${accent} 0%, rgba(9,15,26,0) 64%)`,
      }}
    >
      <div className={`relative flex flex-col items-center gap-12 lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""}`}>
        <div className="w-full max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/30"> {numberLabel} </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-[2.3rem]">
            {title}
          </h2>
          <p className="mt-4 text-lg font-medium text-white/88">
            {subtitleMain}{" "}
            <span className="font-semibold text-white/46">{subtitleAccent}</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
          <span className="mt-8 inline-flex items-center rounded-full border border-white/12 bg-white/[0.02] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/65">
            {status}
          </span>
        </div>

        <div className="relative flex w-full max-w-[520px] items-center justify-center">
          <div className="absolute inset-0 -translate-y-10 scale-110 bg-[radial-gradient(circle_at_50%_20%,rgba(124,198,255,0.22),rgba(124,198,255,0)_60%)] blur-3xl opacity-75" />
          <div className="absolute inset-0 translate-y-10 bg-[radial-gradient(circle_at_60%_80%,rgba(162,126,255,0.18),rgba(162,126,255,0)_55%)] blur-3xl opacity-70" />

          <div
            className="group relative w-full max-w-[440px]"
            style={{
              filter: `drop-shadow(0 35px 120px ${glow})`,
            }}
          >
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-[rgba(9,16,28,0.75)] p-6 transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_40px_140px_rgba(8,16,30,0.6)] group-hover:border-white/18">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0)_62%)] opacity-75" />
              <div className="absolute inset-0 mix-blend-screen opacity-90">
                <Image
                  src={codePattern}
                  alt={`Mockup do projeto ${title}`}
                  fill
                  className={`object-cover object-center transition duration-500 ease-out group-hover:scale-[1.02]`}
                  priority={index < 2}
                />
              </div>
              <div className="relative flex flex-col gap-4 text-left text-white/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                    Cromos Studio
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/35">
                    {status}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-white/75">
                  Prototipo interativo, boards e entregaveis modulares em uma linha do tempo que respira junto com o time da Cromos.
                </p>
              </div>
            </div>

            <div className="absolute inset-x-8 bottom-[-28px] h-12 rounded-[28px] bg-[rgba(6,12,20,0.88)] shadow-[0_18px_40px_rgba(3,7,16,0.65)] transition duration-500 ease-out group-hover:translate-y-1 group-hover:bg-[rgba(8,16,28,0.9)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
