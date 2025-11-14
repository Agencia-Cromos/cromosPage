"use client";

import { useEffect, useMemo, useState } from "react";
import { MenuToggle } from "@/components/common/menu-toggle";
import { FUNDADOR_SECTIONS, WHATSAPP_URL } from "./sidebarData";
import { SidebarDesktopPanel } from "./SidebarDesktopPanel";
import { SidebarMobileDrawer } from "./SidebarMobileDrawer";
import { HomeIcon, WhatsAppIcon } from "./SidebarIcons";

export function FundadorSidebar() {
  const [activeSection, setActiveSection] = useState<string>(FUNDADOR_SECTIONS[0]?.id ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sectionIds = FUNDADOR_SECTIONS.map((section) => section.id);

    const updateActiveSection = () => {
      const referenceLine = window.innerHeight * 0.35;
      let closestId = sectionIds[0];
      let minDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - referenceLine);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      if (closestId) {
        setActiveSection((prev) => (closestId !== prev ? closestId : prev));
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateViewportState = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setIsOpen(false);
    };

    updateViewportState();
    window.addEventListener("resize", updateViewportState);

    return () => {
      window.removeEventListener("resize", updateViewportState);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const width = isDesktop ? (isOpen ? "18rem" : "4.5rem") : "0px";
    document.body.style.setProperty("--fundador-sidebar-width", width);

    return () => {
      document.body.style.removeProperty("--fundador-sidebar-width");
    };
  }, [isDesktop, isOpen]);

  const toggleSidebar = () => {
    if (isDesktop) {
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const navigateToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      }
    }

    setActiveSection(id);

    if (!isDesktop) {
      setIsOpen(false);
    }
  };

  const ctaItems = useMemo(
    () => [
      {
        href: "/",
        label: "Ir para Cromos",
        icon: <HomeIcon />,
      },
      {
        href: WHATSAPP_URL,
        label: "Falar no WhatsApp",
        icon: <WhatsAppIcon />,
        external: true,
      },
    ],
    []
  );

  const handleHoverStart = () => {
    if (isDesktop) {
      setIsOpen(true);
    }
  };

  const handleHoverEnd = () => {
    if (isDesktop) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {!isDesktop && (
        <MenuToggle
          isOpen={isOpen}
          onToggle={toggleSidebar}
          className="fixed left-4 top-4 z-[60] shadow-[0_16px_40px_rgba(6,10,22,0.45)]"
        />
      )}

      <SidebarDesktopPanel
        isOpen={isDesktop ? isOpen : false}
        activeSection={activeSection}
        sections={FUNDADOR_SECTIONS}
        onSelect={navigateToSection}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        ctas={ctaItems}
      />

      <SidebarMobileDrawer
        isOpen={!isDesktop && isOpen}
        sections={FUNDADOR_SECTIONS}
        activeSection={activeSection}
        onSelect={navigateToSection}
        ctas={ctaItems}
      />
    </>
  );
}
