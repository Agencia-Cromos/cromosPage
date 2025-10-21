import { ProjectsIntro } from "@/components/fragments/fundador/projects/ProjectsIntro";
import { ProjectsShowcase } from "@/components/fragments/fundador/projects/ProjectsShowcase";
import { ProjectsCta } from "@/components/fragments/fundador/projects/ProjectsCta";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[linear-gradient(160deg,_rgba(11,16,30,0.96)_0%,_rgba(15,26,46,0.96)_45%,_rgba(5,10,20,1)_100%)] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.18),_rgba(5,9,18,0.95)_68%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <ProjectsIntro />
        <ProjectsShowcase />
        <ProjectsCta />
      </div>
    </section>
  );
}
