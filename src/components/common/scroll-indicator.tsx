type ScrollIndicatorProps = {
  className?: string;
};

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <div
      className={`flex flex-col items-center gap-3 text-xs font-medium tracking-[0.35em] text-white/70 ${className}`}
    >
      <span className="uppercase">Scroll</span>
      <span className="inline-flex h-12 w-8 items-center justify-center rounded-full border border-white/30">
        <span className="h-3 w-1 animate-[float_3s_ease-in-out_infinite] rounded-full bg-white/80" />
      </span>
      <svg
        className="h-5 w-5 animate-[float_4s_ease-in-out_infinite]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5v14m0 0-5-5m5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

