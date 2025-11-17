import Image from "next/image";
import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";

type SolutionCardImage = {
  src: StaticImageData;
  alt: string;
  className: string;
  mobileClassName: string;
};

type SolutionCardProps = {
  index: number;
  title: string;
  description: string;
  image: SolutionCardImage;
  layout: "image-left" | "image-right";
  containerClass: string;
  backgroundClass: string;
  overlayClass?: string;
  fadeUpStyle: (delay: number) => CSSProperties;
};

export function SolutionCard({
  index,
  title,
  description,
  image,
  layout,
  containerClass,
  backgroundClass,
  overlayClass,
  fadeUpStyle,
}: SolutionCardProps) {
  const isImageRight = layout === "image-right";
  const paddingClass = isImageRight ? "lg:pr-[11rem]" : "lg:pl-[11rem]";
  const textBlockPosition = isImageRight ? "lg:max-w-[58%]" : "lg:max-w-[58%] lg:ml-auto";

  return (
    <li
      className={`group relative overflow-visible rounded-[32px] bg-gradient-to-br ${backgroundClass} p-8 sm:p-10 shadow-[0_45px_140px_rgba(6,12,32,0.58)] backdrop-blur-3xl transition duration-500 ease-out hover:-translate-y-3 ${paddingClass} ${containerClass}`}
      style={fadeUpStyle(0.2 + index * 0.1)}
    >
      {overlayClass ? (
        <div className={`pointer-events-none absolute inset-0 -z-10 ${overlayClass}`} />
      ) : null}

      <div className="sm:hidden mb-6 flex justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          className={`pointer-events-none select-none ${image.mobileClassName}`}
          priority={index === 0}
        />
      </div>

      <div className={`relative z-10 flex flex-col gap-5 text-left ${textBlockPosition}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-headline text-2xl text-white sm:text-[1.7rem]">
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        <p className="text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
      </div>

      <Image
        src={image.src}
        alt={image.alt}
        className={`pointer-events-none absolute hidden select-none sm:block ${image.className}`}
        priority={index === 0}
      />
    </li>
  );
}

