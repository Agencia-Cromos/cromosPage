import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

type AboutDifferentialCardProps = {
  label: string;
  headline: string;
  description: string;
  icon: IconType;
  layout?: string;
  index: number;
  baseDelay: number;
  fadeUpStyle: (delay: number) => CSSProperties;
};

export function AboutDifferentialCard({
  label,
  headline,
  description,
  icon: Icon,
  layout,
  index,
  baseDelay,
  fadeUpStyle,
}: AboutDifferentialCardProps) {
  return (
    <li
      className={`group flex h-full flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.08] p-8 text-left shadow-[0_22px_60px_rgba(20,34,59,0.26)] transition duration-300 ease-out hover:-translate-y-2 hover:border-white/35 hover:bg-white/[0.16] hover:shadow-[0_36px_90px_rgba(76,159,255,0.35)] dark:border-white/10 dark:bg-white/5 ${
        layout ?? ""
      }`}
      style={fadeUpStyle(baseDelay + index * 0.07)}
    >
      <span className="flex items-start justify-start transition duration-300 group-hover:scale-[1.05]">
        <svg
          viewBox="0 0 24 24"
          className="h-[60px] w-[60px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`gradient-${index}`} gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#4C9FFF" />
              <stop offset="50%" stopColor="#7AE4FF" />
              <stop offset="100%" stopColor="#FFD778" />
            </linearGradient>
          </defs>
          <Icon aria-hidden="true" fill={`url(#gradient-${index})`} />
        </svg>
      </span>

      <div className="space-y-4">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-white/50">
          {label}
        </h3>
        <p className="text-lg font-headline text-gray-900 dark:text-white">{headline}</p>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-[color:var(--color-gray-400)]">
          {description}
        </p>
      </div>
    </li>
  );
}

