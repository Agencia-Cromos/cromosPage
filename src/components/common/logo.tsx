import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo_dark.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Logo({
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 240px, 60vw",
}: LogoProps) {
  const wrapperClasses = "aspect-[11/3] max-h-20 md:max-h-24";

  return (
    <Link
      href="/"
      aria-label="CROMOS"
      className={`inline-flex h-full items-center ${className}`}
    >
      <span
        className={`relative inline-flex h-full items-center justify-center ${wrapperClasses}`}
      >
        <Image
          src={logo}
          alt="CROMOS"
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
          draggable={false}
        />
      </span>
    </Link>
  );
}
