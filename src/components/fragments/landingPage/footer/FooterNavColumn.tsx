import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Como Trabalhamos", href: "#como-trabalhamos" },
  { label: "Solucoes", href: "#solucoes" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Projeto Social", href: "#projeto-social" },
];

export function FooterNavColumn() {
  return (
    <nav className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Navegação</h3>
      <ul className="mt-3 flex flex-col items-center gap-2 text-sm md:items-start">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-400 transition hover:text-[color:var(--color-primary)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
