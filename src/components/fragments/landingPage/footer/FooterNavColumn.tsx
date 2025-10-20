"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import { scrollToSection } from "@/utils/scrollToSection";

type FooterNavLink = {
  label: string;
  href: string;
  sectionId?: string;
};

const NAV_LINKS: FooterNavLink[] = [
  { label: "Inicio", href: "/#HeroSection", sectionId: "AboutUsSection" },
  { label: "Parceiros", href: "/#HeroSection", sectionId: "HeroSection" },
  { label: "Sobre", href: "/#AboutUsSection", sectionId: "AboutUsSection" },
  { label: "Serviços", href: "/#solutionsSection", sectionId: "solutionsSection" },
  { label: "Projetos", href: "/projetos" },
  { label: "Depoimentos", href: "/#testimonialsSection", sectionId: "testimonialsSection" },
  { label: "Projeto Social", href: "/#ProjectSocialSection", sectionId: "ProjectSocialSection" },
];

export function FooterNavColumn() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    if (!sectionId) {
      return;
    }

    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Navegacao</h3>
      <ul className="mt-3 flex flex-col items-center gap-2 text-sm md:items-start">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={(event) => handleNavClick(event, link.sectionId)}
              className="text-gray-400 transition hover:text-[color:var(--color-primary)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
