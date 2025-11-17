import { SiElectron, SiNextdotjs, SiReact } from "react-icons/si";
import { AboutTechStackCard } from "./AboutTechStackCard";

export function AboutTechStackGrid() {
  return (
    <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_40px_rgba(6,10,22,0.35)] backdrop-blur sm:p-5">
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        Desenvolvedor web e mobile
      </span>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
        <AboutTechStackCard
          title="Next.js"
          subtitle="SSR otimizado"
          Icon={SiNextdotjs}
        />
        <AboutTechStackCard
          title="React.js"
          subtitle="UI reativa"
          Icon={SiReact}
          iconColorClassName="text-[#61DAFB]"
          shadowClassName="shadow-[0_10px_22px_rgba(97,218,251,0.35)]"
        />
        <AboutTechStackCard
          title="React Native"
          subtitle="Apps nativos"
          Icon={SiReact}
          iconColorClassName="text-[#00B4D8]"
          shadowClassName="shadow-[0_10px_22px_rgba(0,180,216,0.35)]"
        />
        <AboutTechStackCard
          title="Electron"
          subtitle="Desktop sólido"
          Icon={SiElectron}
          iconColorClassName="text-[#88C0F7]"
          shadowClassName="shadow-[0_10px_22px_rgba(136,192,247,0.35)]"
        />
      </div>
    </div>
  );
}

