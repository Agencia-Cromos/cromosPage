"use client";

export function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_#0b1121_0%,_rgba(13,20,34,0.96)_54%,_rgba(8,14,24,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_32%_18%,_rgba(114,176,255,0.18),_rgba(11,17,29,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,_rgba(255,176,140,0.16),_rgba(11,17,29,0)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-26%] h-[360px] bg-[radial-gradient(circle,_rgba(255,255,255,0.25),_rgba(8,12,23,0)_68%)] blur-3xl opacity-75" />
    </>
  );
}
