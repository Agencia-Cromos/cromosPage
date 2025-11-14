import { Header, type HeaderNavItem } from "@/components/common/Header";
import { ProjectsFooterSection } from "@/components/layouts/projetos/sections/ProjectsFooterSection";
import { ProjectsHeroSection } from "@/components/layouts/projetos/sections/ProjectsHeroSection";
import { ProjectsHubSection } from "@/components/layouts/projetos/sections/ProjectsHubSection";

const NAV_ITEMS: HeaderNavItem[] = [
  { label: "Pagina inicial", href: "/" },
  { label: "Fundador", href: "/fundador" },
  { label: "Contato", href: "/projetos#footer", sectionId: "footer" },
];

export default function ProjectsPage() {
  return (
    <>
      <Header navItems={NAV_ITEMS} />
      <main className="flex min-h-screen flex-col bg-[#03050b] text-white">
        <ProjectsHeroSection />
        <ProjectsHubSection />
      </main>
      <ProjectsFooterSection />
    </>
  );
}
