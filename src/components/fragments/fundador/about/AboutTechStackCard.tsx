import type { IconType } from "react-icons";

type AboutTechStackCardProps = {
  title: string;
  subtitle: string;
  iconColorClassName?: string;
  shadowClassName?: string;
  Icon: IconType;
};

export function AboutTechStackCard({
  title,
  subtitle,
  iconColorClassName,
  shadowClassName,
  Icon,
}: AboutTechStackCardProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
      <div className="flex flex-col gap-1 text-left">
        <span className="text-sm font-semibold text-white/85">{title}</span>
        <span className="text-xs text-white/55">{subtitle}</span>
      </div>
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] ${
          shadowClassName ?? "shadow-[0_10px_22px_rgba(76,159,255,0.32)]"
        }`}
      >
        <Icon className={`text-lg ${iconColorClassName ?? "text-white"}`} />
      </span>
    </div>
  );
}

