import type { CSSProperties } from "react";

const PARTICLES = [
  { left: "8%", top: "28%", size: "18", duration: "12s", delay: "0s" },
  { left: "18%", top: "68%", size: "24", duration: "16s", delay: "4s" },
  { left: "35%", top: "18%", size: "14", duration: "14s", delay: "2s" },
  { left: "52%", top: "72%", size: "20", duration: "18s", delay: "5s" },
  { left: "62%", top: "32%", size: "16", duration: "15s", delay: "1s" },
  { left: "74%", top: "58%", size: "22", duration: "17s", delay: "3s" },
  { left: "82%", top: "24%", size: "12", duration: "13s", delay: "6s" },
  { left: "88%", top: "74%", size: "18", duration: "19s", delay: "7s" },
  { left: "44%", top: "44%", size: "26", duration: "20s", delay: "8s" },
  { left: "12%", top: "82%", size: "16", duration: "18s", delay: "9s" },
];

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#1B2A45,_#0A0E17_80%)]" />
      <div
        className="absolute inset-0 opacity-80 mix-blend-screen"
        style={{
          backgroundImage: "var(--bg-gradient-primary)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 18s ease infinite",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        {PARTICLES.map((particle, index) => (
          <span
            key={`particle-${index}`}
            className="absolute rounded-full bg-white/12 blur-[1px]"
            style={
              {
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `float ${particle.duration} ease-in-out infinite`,
                animationDelay: particle.delay,
                opacity: 0.6,
                filter: "drop-shadow(0 0 12px rgba(92,107,255,0.35))",
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0E17] to-transparent" />
    </div>
  );
}
