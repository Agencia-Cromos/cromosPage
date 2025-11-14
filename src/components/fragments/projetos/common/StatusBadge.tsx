export function StatusBadge({ status }: { status: string }) {
  const color =
    status === "Entregue"
      ? "#00FFC8"
      : status.toLowerCase().includes("desenvol")
      ? "#9B6FFF"
      : "#7de1ff";
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em]"
      style={{
        borderColor: `${color}33`,
        backgroundColor: `${color}1a`,
        color,
      }}
    >
      {status}
    </span>
  );
}

