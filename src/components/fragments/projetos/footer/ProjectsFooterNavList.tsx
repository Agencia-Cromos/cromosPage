import Link from "next/link";

export function ProjectsFooterNavList() {
  return (
    <nav className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Navegação</h3>
      <ul className="mt-3 flex flex-col items-center gap-2 text-sm md:items-start">
        <li>
          <Link
            href="/"
            className="text-gray-400 transition hover:text-[color:var(--color-primary)]"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/fundador"
            className="text-gray-400 transition hover:text-[color:var(--color-primary)]"
          >
            Portfólio
          </Link>
        </li>
        <li>
          <Link
            href="/#ProjectSocialSection"
            className="text-gray-400 transition hover:text-[color:var(--color-primary)]"
          >
            Projeto Social
          </Link>
        </li>
      </ul>
    </nav>
  );
}

