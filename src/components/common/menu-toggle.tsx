type MenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
};

export function MenuToggle({
  isOpen,
  onToggle,
  className = "",
}: MenuToggleProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      onClick={onToggle}
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
      <span className="flex h-5 w-6 flex-col justify-between">
        <span
          className={`block h-0.5 rounded-full bg-current transition-transform duration-300 ${
            isOpen ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 rounded-full bg-current transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 rounded-full bg-current transition-transform duration-300 ${
            isOpen ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

