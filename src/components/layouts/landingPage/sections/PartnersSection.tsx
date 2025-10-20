import { Container } from "@/app/components/common/container";
import Image, { type StaticImageData } from "next/image";
import openAiLogo from "@/assets/companies/open.png";
import googleLogo from "@/assets/companies/google.png";
import microsoftLogo from "@/assets/companies/microsoft.png";
import metaLogo from "@/assets/companies/meta.png";
import awsLogo from "@/assets/companies/aws.png";
import vercelLogo from "@/assets/companies/vercel.png";


type Partner = {
  name: string;
  logo: StaticImageData;
  width: number;
  height: number;
  className?: string;
};

const PARTNERS: Partner[] = [
  { name: "OpenAI", logo: openAiLogo, width: 432, height: 117 },
  { name: "Google", logo: googleLogo, width: 348, height: 145 },
  { name: "Microsoft", logo: microsoftLogo, width: 336, height: 150, className: "lg:h-[5rem]" },
  { name: "Meta", logo: metaLogo, width: 225, height: 225, className: "md:h-[5rem] lg:h-[6rem]" },
  { name: "Amazon Web Services", logo: awsLogo, width: 275, height: 183 },
  { name: "Vercel", logo: vercelLogo, width: 470, height: 107 },
];

export function PartnersSection() {
  return (
    <section className="bg-[linear-gradient(160deg,_rgba(var(--color-accent-rgb),0.78)_0%,_rgba(var(--color-accent-rgb),0.62)_45%,_rgba(12,20,38,0.92)_100%)] py-24 sm:py-28">
      <Container variant="wide" className="flex flex-col items-center gap-14">
        <div className="flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-balance font-headline text-4xl text-white sm:text-5xl">
            Conectados com quem lidera o futuro.
          </h2>
          <p className="max-w-xl text-pretty font-sans text-base text-[color:var(--color-gray-300)] sm:text-lg">
            Parcerias estratégicas com empresas que moldam a inovação global.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b1222] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b1222] to-transparent" />

          <ul className="flex w-max animate-[partnerMarquee_32s_linear_infinite] gap-6 px-8">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <li
                key={`${partner.name}-${index}`}
                className="group flex min-w-[220px] items-center justify-center rounded-3xl border border-white/15 bg-white/[0.08] px-12 py-8 shadow-[0_20px_50px_rgba(12,18,34,0.5)] backdrop-blur-lg transition duration-300 ease-out hover:-translate-y-2 hover:border-white/40 hover:bg-white/[0.16]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={`h-14 w-auto object-contain opacity-100 transition duration-300 ease-out group-hover:scale-[1.05] md:h-16 lg:h-20 ${partner.className ?? ""}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-sm font-sans text-[color:var(--color-gray-300)]">
          Essas parcerias refletem nossa presença em um ecossistema global de inovação e confiança.
        </p>
      </Container>
    </section>
  );
}
