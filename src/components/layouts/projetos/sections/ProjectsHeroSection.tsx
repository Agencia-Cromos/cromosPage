import { Container } from "@/components/common/container";
import { ProjectsHeroHeading } from "@/components/fragments/projetos/hero/ProjectsHeroHeading";
import { ProjectsHeroStatusBar } from "@/components/fragments/projetos/hero/ProjectsHeroStatusBar";
import { ProjectsHeroVisual } from "@/components/fragments/projetos/hero/ProjectsHeroVisual";
import codePattern from "@/assets/code-pattern.svg";

export function ProjectsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#040711_0%,#050b18_55%,#0a1533_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(103,157,255,0.28),rgba(103,157,255,0))] blur-[120px]" />
        <div className="absolute right-[-15%] bottom-[8%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(120,81,255,0.28),rgba(120,81,255,0))] blur-[140px]" />
        <div
          className="absolute inset-y-10 right-[5%] w-[620px] origin-top-right rotate-[-8deg] opacity-50"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(4,9,18,0.8) 0%, rgba(4,9,18,0.45) 45%, rgba(4,9,18,0.08) 90%), url(${codePattern.src})`,
            backgroundSize: "760px auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 48%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 48%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-0 h-[680px] w-full animate-[particleDrift_24s_linear_infinite] bg-[radial-gradient(circle_at_20%_20%,rgba(124,198,255,0.25)_0%,rgba(124,198,255,0)_45%),radial-gradient(circle_at_70%_65%,rgba(162,126,255,0.22)_0%,rgba(162,126,255,0)_50%),radial-gradient(circle_at_40%_85%,rgba(114,207,255,0.18)_0%,rgba(114,207,255,0)_55%)] opacity-[0.35] blur-[50px]" />
        </div>
      </div>

      <Container
        variant="wide"
        className="relative z-10 flex min-h-[80vh] flex-col justify-center gap-16 py-28 sm:py-32"
      >
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
          <div className="order-2 lg:order-1">
            <ProjectsHeroHeading />
          </div>
        </div>
        <ProjectsHeroStatusBar />
      </Container>
    </section>
  );
}
