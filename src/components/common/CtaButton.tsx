import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
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
  const computedRel =
    target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
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
