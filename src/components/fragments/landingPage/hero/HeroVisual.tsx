import Image from "next/image";
import earthBg from "@/assets/earth_bg.png";

export function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 right-0 z-0 overflow-hidden">
      <div className="relative h-full w-full lg:hidden">
        <Image
          src={earthBg}
          alt="Planeta conectado"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.58]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,18,32,0.72),_rgba(6,12,26,0.5))]" />
      </div>
      <div className="pointer-events-auto group absolute inset-y-0 right-0 hidden h-full w-[90vw] max-w-[1120px] items-center justify-end lg:flex">
        <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,_rgba(92,107,255,0.28),_rgba(8,14,26,0.85)_68%,_transparent_95%)] blur-3xl" />
        <div className="relative z-10 h-auto w-full max-w-[820px] translate-x-[14%] xl:translate-x-[18%] 2xl:translate-x-[22%]">
          <Image
            src={earthBg}
            alt="Planeta conectado"
            priority
            width={1100}
            height={1100}
            sizes="(min-width: 1536px) 38vw, (min-width: 1280px) 45vw, 60vw"
            className="h-auto w-full drop-shadow-[0_30px_60px_rgba(40,100,200,0.35)] transition-[transform,filter] duration-500 ease-out group-hover:[animation:planetPulse_1.8s_ease-in-out_infinite] opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
