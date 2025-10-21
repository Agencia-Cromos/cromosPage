"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FundadorSection } from "./sidebarData";
import { SidebarSectionButton } from "./SidebarSectionButton";
import { SidebarCTAButton } from "./SidebarCTAButton";

type SidebarMobileDrawerProps = {
  isOpen: boolean;
  sections: FundadorSection[];
  activeSection: string;
  onSelect: (id: string) => void;
  ctas: Array<{ href: string; label: string; icon: ReactNode; external?: boolean }>;
};

export function SidebarMobileDrawer({
  isOpen,
  sections,
  activeSection,
  onSelect,
  ctas,
}: SidebarMobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.nav
            className="absolute left-0 top-0 flex h-full w-72 flex-col gap-8 bg-[linear-gradient(180deg,_rgba(8,13,24,0.98)_0%,_rgba(10,16,29,0.94)_45%,_rgba(6,10,22,1)_100%)] px-6 py-20 text-white shadow-[0_24px_60px_rgba(6,10,22,0.6)]"
            initial={{ x: -96, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -96, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-white/60">Fundador</span>
              <span className="text-lg font-semibold text-white">Nat\u00E3 Spitz</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">Navegacao</p>
              <div className="flex flex-col gap-3">
                {sections.map((section) => (
                  <SidebarSectionButton
                    key={section.id}
                    id={section.id}
                    label={section.label}
                    isActive={section.id === activeSection}
                    onSelect={onSelect}
                    showLabel
                  />
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              {ctas.map((cta) => (
                <SidebarCTAButton
                  key={cta.label}
                  href={cta.href}
                  label={cta.label}
                  icon={cta.icon}
                  showLabel
                  external={cta.external}
                />
              ))}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
