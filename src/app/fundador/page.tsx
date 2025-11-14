import { FundadorSidebar } from "@/components/fragments/fundador/sideBar/FundadorSidebar";
import { HeroSection } from "@/components/layouts/fundador/sections/HeroSection";
import { AboutSection } from "@/components/layouts/fundador/sections/AboutSection";
import { ProjectsSection } from "@/components/layouts/fundador/sections/ProjectsSection";
import { KnowledgeSection } from "@/components/layouts/fundador/sections/KnowledgeSection";
import { ConnectionSection } from "@/components/layouts/fundador/sections/ConnectionSection";
import { ContactSection } from "@/components/layouts/fundador/sections/ContactSection";
import { FooterSection } from "@/components/layouts/fundador/sections/FooterSection";

export default function FundadorPage() {
  return (
    <>
      <FundadorSidebar />
      <main
        className="flex min-h-screen flex-col bg-[#050A16] text-white scroll-smooth transition-[padding-left] duration-300"
        style={{ paddingLeft: "var(--fundador-sidebar-width, 0px)" }}
      >
        <HeroSection />
        <AboutSection />
        <KnowledgeSection />
        <ProjectsSection />
        <ConnectionSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
