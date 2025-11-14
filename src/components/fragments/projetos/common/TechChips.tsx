export function TechChips({ items = [] as string[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

