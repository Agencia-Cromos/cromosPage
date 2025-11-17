"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

import { scrollToSection } from "@/utils/scrollToSection";

import { CtaButton } from "./CtaButton";
import { Container } from "./container";
import { Logo } from "./logo";
import { MenuToggle } from "./menu-toggle";
import { useNavigationLoader } from "./NavigationLoader";

export type HeaderNavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

type HeaderProps = {
  navItems: HeaderNavItem[];
};

export function Header({ navItems }: HeaderProps) {
  const navigation = useNavigationLoader();
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId?: string,
    shouldCloseMenu = false,
  ) => {
    if (sectionId) {
      event.preventDefault();
      scrollToSection(sectionId);
    } else if (navigation) {
      navigation.startNavigation();
    }

    if (shouldCloseMenu) {
      closeMenu();
    }
  };

  return (
    <>
      <header
        data-site-header="true"
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-[#0A0E17]/85 backdrop-blur-2xl shadow-[0_12px_60px_rgba(12,20,37,0.55)]"
            : "bg-transparent"
        }`}
      >
        <Container
          variant="full"
          className="mx-auto flex h-16 items-center gap-4 py-3 md:h-20 md:gap-6 md:py-4"
        >
          <div className="flex h-full items-center">
            <Logo
              priority
              sizes="(min-width: 768px) 240px, 180px"
              className="drop-shadow-[0_12px_30px_rgba(15,40,80,0.35)]"
            />
          </div>
          <div className="ml-auto flex h-full items-center gap-3 md:gap-6">
            <nav className="hidden items-center gap-10 text-sm font-medium tracking-wide text-white/80 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.sectionId)}
                  className="relative py-1 transition-colors duration-300 hover:text-white after:absolute after:left-1/2 after:bottom-0 after:h-[3px] after:w-full after:-translate-x-1/2 after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,_rgba(71,164,255,0.12),_#7AE4FF,_rgba(71,164,255,0.12))] after:shadow-[0_0_0_rgba(122,228,255,0)] after:content-[''] after:transition-all after:duration-300 after:origin-center hover:after:scale-x-100 hover:after:shadow-[0_0_16px_rgba(122,228,255,0.85)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <CtaButton href="https://wa.me/message/ACFRONES45HZM1" target="_blank">
                Falar com a gente
              </CtaButton>
            </div>
            <MenuToggle
              className="md:hidden"
              isOpen={isMenuOpen}
              onToggle={() => setMenuOpen((prev) => !prev)}
            />
          </div>
        </Container>
      </header>
      {isMenuOpen ? (
        <div className="fixed inset-0 z-30 overflow-hidden">
          <div className="absolute inset-0 bg-[#060910]/70 backdrop-blur-xl transition-opacity duration-500" />
          <div className="absolute inset-x-0 top-[64px] flex origin-top flex-col gap-8 rounded-t-3xl border-t border-white/10 bg-white/8 px-6 py-10 text-white shadow-[0_40px_120px_rgba(6,12,24,0.65)] animate-[slideDownReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_both] md:top-[80px]">
            <Logo
              className="mx-auto mb-4 h-16 drop-shadow-[0_12px_30px_rgba(15,40,80,0.45)] md:h-20"
            />
            <div className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.sectionId, true)}
                  className="rounded-2xl border border-white/0 bg-white/5 px-5 py-4 text-left tracking-wide transition hover:border-white/30 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <CtaButton
              href="https://wa.me/message/ACFRONES45HZM1"
              onClick={closeMenu}
              target="_blank"
            >
              Entrar em contato
            </CtaButton>
            <button
              type="button"
              onClick={closeMenu}
              className="text-sm font-medium uppercase tracking-[0.4em] text-white/70"
            >
              Fechar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
