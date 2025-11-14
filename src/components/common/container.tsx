import type { ReactNode } from "react";

type ContainerVariant = "narrow" | "default" | "wide" | "full";

type ContainerProps = {
  variant?: ContainerVariant;
  className?: string;
  children: ReactNode;
};

const variantMap: Record<ContainerVariant, string> = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  variant = "default",
  className = "",
  children,
}: ContainerProps) {
  return (
    <div className={`w-full px-6 sm:px-8 ${variantMap[variant]} mx-auto ${className}`.trim()}>
      {children}
    </div>
  );
}
