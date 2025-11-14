import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiChakraui,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiExpo,
  SiNodedotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export function TechIcon({ name }: { name: string }) {
  const key = name.toLowerCase();
  const common = {
    color: "#cfe7ff",
    className: "inline-block",
    size: 16,
  } as const;
  if (key.includes("next")) return <SiNextdotjs {...common} />;
  if (key.includes("typescript")) return <SiTypescript {...common} />;
  if (key.includes("react native")) return <SiReact {...common} />;
  if (key === "react") return <SiReact {...common} />;
  if (key.includes("chakra")) return <SiChakraui {...common} />;
  if (key.includes("nest")) return <SiNestjs {...common} />;
  if (key.includes("prisma")) return <SiPrisma {...common} />;
  if (key.includes("supabase")) return <SiSupabase {...common} />;
  if (key.includes("postgres")) return <SiPostgresql {...common} />;
  if (key.includes("expo")) return <SiExpo {...common} />;
  if (key.includes("node")) return <SiNodedotjs {...common} />;
  if (key.includes("tailwind")) return <SiTailwindcss {...common} />;
  if (key.includes("vercel")) return <SiVercel {...common} />;
  return <span className="inline-block h-4 w-4 rounded-sm bg-white/30" />;
}

