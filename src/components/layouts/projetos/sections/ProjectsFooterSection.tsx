import { Container } from "@/components/common/container";
import { FooterBottomBar } from "@/components/fragments/landingPage/footer/FooterBottomBar";
import { FooterBrandColumn } from "@/components/fragments/landingPage/footer/FooterBrandColumn";

function ProjectsFooterNav() {
  return (
    <nav className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Navegação</h3>
      <ul className="mt-3 flex flex-col items-center gap-2 text-sm md:items-start">
        <li>
          <a href="/" className="text-gray-400 transition hover:text-[color:var(--color-primary)]">Início</a>
        </li>
        <li>
          <a href="/fundador" className="text-gray-400 transition hover:text-[color:var(--color-primary)]">Portfólio</a>
        </li>
        <li>
          <a href="/#ProjectSocialSection" className="text-gray-400 transition hover:text-[color:var(--color-primary)]">Projeto Social</a>
        </li>
      </ul>
    </nav>
  );
}

function ProjectsFooterContact() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Contato</h3>
      <ul className="mt-3 flex flex-col gap-3 text-sm text-gray-400">
        <li className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.24em] text-white/50">Email</span>
          <a href="mailto:cromosagencia@gmail.com" className="hover:text-[color:var(--color-primary)]">cromosagencia@gmail.com</a>
        </li>
        <li className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.24em] text-white/50">Email (Natã)</span>
          <a href="mailto:nataspitz81@gmail.com" className="hover:text-[color:var(--color-primary)]">nataspitz81@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}

export function ProjectsFooterSection() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#05080E] text-white md:py-16 pt-6">
      <Container variant="default" className="mx-auto flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <FooterBrandColumn />
          <ProjectsFooterNav />
          <ProjectsFooterContact />
        </div>
        <FooterBottomBar />
      </Container>
    </footer>
  );
}
