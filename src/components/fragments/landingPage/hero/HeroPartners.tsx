import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {  SiGoogle, SiOpenai, SiVercel } from "react-icons/si";
import { TbBrandMeta } from "react-icons/tb";
import { FaMicrosoft } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

type Partner = {
  name: string;
  icon: IconType;
  accent: string;
};

const PARTNERS: Partner[] = [
  { name: "OpenAI", icon: SiOpenai, accent: "text-[#10A37F]" },
  { name: "Google", icon: SiGoogle, accent: "text-[#EA4335]" },
  { name: "Microsoft", icon: FaMicrosoft, accent: "text-[#66C0F4]" },
  { name: "Meta", icon: TbBrandMeta, accent: "text-[#10A5F5]" },
  { name: "Vercel", icon: SiVercel, accent: "text-white" },
  { name: "Amazon Web Services", icon: FaAws, accent: "text-[#FF9900]" },
];

type HeroPartnersProps = {
  id?: string;
  style?: CSSProperties;
};

export function HeroPartners({ id, style }: HeroPartnersProps) {
  return (
    <div
      id={id}
      style={style}
      className="flex w-full flex-col items-center gap-5 text-center md:items-start md:text-left"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Parcerias</p>
      <p className="text-sm text-white/70">Aliados que impulsionam nossas entregas de tecnologia sob demanda.</p>
      <div className="flex w-full items-center justify-center opacity-90">
        <div className="flex w-full max-w-full items-center justify-center md:hidden">
          <div className="relative h-16 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#05080E] via-transparent to-[#05080E] opacity-70 pointer-events-none" />
            <div className="absolute inset-0 flex w-max animate-[partnerMarquee_32s_linear_infinite] gap-4 px-2">
              {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex min-h-[3rem] min-w-[9.5rem] items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/12 px-5 py-2.5 backdrop-blur-sm"
                >
                  <partner.icon className={`h-6 w-6 shrink-0 ${partner.accent}`} aria-hidden="true" />
                  <span className="text-xs font-medium text-white/80">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden flex-wrap items-center justify-center gap-5 md:flex md:justify-start">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex min-h-[3.25rem] min-w-[10rem] items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/12 px-6 py-3 backdrop-blur-sm"
            >
              <partner.icon className={`h-6 w-6 shrink-0 ${partner.accent}`} aria-hidden="true" />
              <span className="text-sm font-medium text-white/80">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
