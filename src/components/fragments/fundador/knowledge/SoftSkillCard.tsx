type SoftSkillCardProps = {
  id: string;
  title: string;
  description: string;
  color: string;
  percentage: number;
  badge: string;
  label: string;
  classification: string;
};

export function SoftSkillCard({
  title,
  description,
  color,
  percentage,
  badge,
  label,
  classification,
}: SoftSkillCardProps) {
  return (
    <article
      className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-[0_18px_45px_rgba(6,10,22,0.35)] transition hover:border-white/25 hover:bg-white/[0.1]"
      style={{ boxShadow: `0 18px 45px ${color}26` }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            {title}
          </span>
          <p className="text-sm text-white/70">{description}</p>
        </div>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          {percentage}%
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
        <span>
          {badge} {label}
        </span>
        <span className="text-white/65">{classification}</span>
      </div>
    </article>
  );
}

