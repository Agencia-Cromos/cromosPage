"use client";

export function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.22),_rgba(5,8,16,0.94)_65%,_rgba(5,8,16,1)_100%)]" />
      <div className="pointer-events-none absolute right-[-18%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(76,159,255,0.35),_rgba(5,8,16,0)_70%)] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute left-[-20%] top-[16%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(250,113,133,0.22),_rgba(5,8,16,0)_78%)] blur-3xl opacity-70" />
    </>
  );
}
