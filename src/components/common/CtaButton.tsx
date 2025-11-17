'use client';

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useNavigationLoader } from "./NavigationLoader";

type CTAButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  rel?: string;
  children: ReactNode;
};

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

const variantClasses: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "text-[color:var(--color-button-text)] bg-[length:200%_200%] animate-[gradientFlow_14s_linear_infinite] hover:brightness-110 hover:shadow-[0_0_32px_rgba(124,209,255,0.45)] active:scale-[0.98]",
  secondary:
    "border border-white/40 text-white/90 hover:bg-white/10 hover:text-white active:scale-[0.98]",
};

export function CtaButton({
  href,
  variant = "primary",
  icon,
  className = "",
  children,
  onClick,
  target,
  rel,
}: CTAButtonProps) {
  const pathname = usePathname();
  const navigation = useNavigationLoader();

  const computedRel =
    target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (!navigation) return;

    const isHashLink = href.startsWith("#");
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isHashLink || isExternal || target === "_blank" || event.defaultPrevented) {
      return;
    }

    if (!href.startsWith("/")) {
      return;
    }

    if (pathname === href) {
      return;
    }

    navigation.startNavigation();
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
      target={target}
      rel={computedRel}
      style={
        variant === "primary"
          ? {
              backgroundImage: "var(--bg-gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }
          : undefined
      }
    >
      <span className="font-medium tracking-tight">{children}</span>
      {icon ? <span className="text-lg">{icon}</span> : null}
    </Link>
  );
}
