"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "@/assets/nata_2.svg";
import { MobileFounderBadge } from "./MobileFounderBadge";

export function HeroPortrait() {
  return (
    <>
      <MobileFounderBadge />
      <motion.figure
        className="pointer-events-none relative z-[8] hidden lg:block lg:mx-0 lg:max-w-none lg:pointer-events-none lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50vw] lg:drop-shadow-[0_8px_35px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <div className="relative h-full w-full">
          <Image
            src={profileImage}
            alt="Retrato do fundador"
            fill
            priority
            sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 50vw, 60vw"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectFit: "cover",
              objectPosition: "center 40%",
              transform: "scale(1.12) translateY(4%)",
              transformOrigin: "center right",
            }}
          />
        </div>
      </motion.figure>
    </>
  );
}
