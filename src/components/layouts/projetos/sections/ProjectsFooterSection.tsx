import { Container } from "@/components/common/container";
import { FooterBottomBar } from "@/components/fragments/landingPage/footer/FooterBottomBar";
import { FooterBrandColumn } from "@/components/fragments/landingPage/footer/FooterBrandColumn";
import { ProjectsFooterNavList } from "@/components/fragments/projetos/footer/ProjectsFooterNavList";
import { ProjectsFooterContactList } from "@/components/fragments/projetos/footer/ProjectsFooterContactList";

export function ProjectsFooterSection() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#05080E] text-white md:py-16 pt-6">
      <Container variant="default" className="mx-auto flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <FooterBrandColumn />
          <ProjectsFooterNavList />
          <ProjectsFooterContactList />
        </div>
        <FooterBottomBar />
      </Container>
    </footer>
  );
}

