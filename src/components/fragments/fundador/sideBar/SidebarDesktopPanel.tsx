"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { FundadorSection } from "./sidebarData";
import { SidebarSectionButton } from "./SidebarSectionButton";
import { SidebarCTAButton } from "./SidebarCTAButton";

type SidebarDesktopPanelProps = {
  isOpen: boolean;
  activeSection: string;
  sections: FundadorSection[];
  onSelect: (id: string) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  ctas: Array<{ href: string; label: string; icon: ReactNode; external?: boolean }>;
};

export function SidebarDesktopPanel({
  isOpen,
  activeSection,
  sections,
  onSelect,
  onHoverStart,
  onHoverEnd,
  ctas,
}: SidebarDesktopPanelProps) {
  return (
    <motion.aside
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`fixed left-0 top-0 hidden h-screen flex-col border-r border-white/10 bg-[linear-gradient(180deg,_rgba(8,13,24,0.95)_0%,_rgba(10,16,29,0.92)_45%,_rgba(6,10,22,0.98)_100%)] text-white shadow-[0_24px_60px_rgba(6,10,22,0.55)] backdrop-blur-xl transition-[width] duration-300 lg:flex ${
        isOpen ? "w-72 px-6" : "w-20 px-3"
      }`}
      animate={{ width: isOpen ? 288 : 80 }}
    >
      <div className={`${isOpen ? "flex items-start gap-3 pt-8" : "items-center justify-center pt-8"} flex`}>
        {isOpen ? (
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/60">Portfolio</span>
            <span className="text-lg font-semibold text-white">Nat\u00E3 Spitz</span>
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
            F
          </div>
        )}
      </div>

      <div className="mt-8 flex-1 overflow-hidden">
        {isOpen && <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45">Navegacao</p>}
        <div className={`flex flex-col gap-2 ${isOpen ? "" : "items-center"}`}>
          {sections.map((section) => (
            <SidebarSectionButton
              key={section.id}
              id={section.id}
              label={section.label}
              isActive={section.id === activeSection}
              onSelect={onSelect}
              showLabel={isOpen}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2 pb-6">
        {ctas.map((cta) => (
          <SidebarCTAButton
            key={cta.label}
            href={cta.href}
            label={cta.label}
            icon={cta.icon}
            showLabel={isOpen}
            external={cta.external}
          />
        ))}
      </div>
    </motion.aside>
  );
}
