"use client";

import Image from "next/image";
import profileImage from "@/assets/nata_2.svg";

export function MobileFounderBadge() {
  return (
    <div className="relative z-[12] flex w-full max-w-[520px] items-center gap-4 rounded-full border border-white/15 bg-white/[0.08] p-4 shadow-[0_20px_45px_rgba(6,10,18,0.35)] backdrop-blur-md lg:hidden">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/25 bg-white shadow-lg shadow-[#0a1424]/40">
        <Image
          src={profileImage}
          alt="Retrato do fundador"
          fill
          priority
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
          Meu nome é
        </span>
        <span className="text-lg font-semibold text-white">Natã Spitz Alves</span>
      </div>
    </div>
  );
}
