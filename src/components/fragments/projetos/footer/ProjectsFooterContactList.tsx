import Link from "next/link";

export function ProjectsFooterContactList() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Contato</h3>
      <ul className="mt-3 flex flex-col gap-3 text-sm text-gray-400">
        <li className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.24em] text-white/50">Email</span>
          <Link
            href="mailto:cromosagencia@gmail.com"
            className="hover:text-[color:var(--color-primary)]"
          >
            cromosagencia@gmail.com
          </Link>
        </li>
        <li className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.24em] text-white/50">Email (Natã)</span>
          <Link
            href="mailto:nataspitz81@gmail.com"
            className="hover:text-[color:var(--color-primary)]"
          >
            nataspitz81@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
}

