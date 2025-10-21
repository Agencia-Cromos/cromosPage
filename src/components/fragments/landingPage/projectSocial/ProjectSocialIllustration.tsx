import Image from "next/image";
import projectMockup from "@/assets/mocks/mockup.png";

export function ProjectSocialIllustration() {
  return (
    <>
      <div className="relative flex w-full justify-center lg:hidden">
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#d8e4ff]/60 shadow-[0_25px_60px_rgba(15,23,42,0.12)]" />
        <Image
          src={projectMockup}
          alt="Tela do projeto social"
          priority
          className="relative z-10 w-full max-w-[420px] object-contain"
        />
      </div>

      <div className="pointer-events-none relative hidden h-[420px] w-[60vw] items-center overflow-visible lg:flex xl:h-[480px]">
        <div
          aria-hidden="true"
          className="absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,159,255,0.28)_0%,_rgba(9,16,32,0.05)_60%,_rgba(9,16,32,0)_90%)] blur-3xl"
        />
        <Image
          src={projectMockup}
          alt="Tela do projeto social"
          priority
          className="relative z-10 h-auto w-full max-w-none translate-x-[-6vw] object-contain drop-shadow-[0_28px_80px_rgba(15,23,42,0.25)]"
        />
      </div>
    </>
  );
}
