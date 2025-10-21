"use client";

type SidebarSectionButtonProps = {
  id: string;
  label: string;
  isActive: boolean;
  showLabel: boolean;
  onSelect: (id: string) => void;
};

export function SidebarSectionButton({
  id,
  label,
  isActive,
  showLabel,
  onSelect,
}: SidebarSectionButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-label={label}
      className={`group relative flex w-full items-center rounded-full border border-transparent px-3 py-2 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        showLabel ? "justify-start gap-3" : "justify-center"
      } ${
        isActive ? "bg-white/15 text-white" : "text-white/60 hover:border-white/10 hover:bg-white/10 hover:text-white"
      }`}
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full transition duration-200 ${
          isActive ? "scale-125 bg-white" : "bg-white/30 group-hover:bg-white/50"
        }`}
      />
      {showLabel ? (
        <span className="truncate">{label}</span>
      ) : (
        <>
          <span className="sr-only">{label}</span>
          <span className="pointer-events-none absolute left-12 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/15 px-3 py-1 text-xs font-medium text-white shadow-[0_12px_24px_rgba(6,10,22,0.35)] transition duration-200 lg:group-hover:flex">
            {label}
          </span>
        </>
      )}
    </button>
  );
}
