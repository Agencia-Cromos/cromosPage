const CONTACT_ITEMS = [
  {
    label: "Telefone",
    value: "(22) 99972-9196",
    href: "https://wa.me/message/ACFRONES45HZM1",
    external: true,
  },
  {
    label: "Email",
    value: "cromosagencia@gmail.com",
    href: "mailto:cromosagencia@gmail.com",
  },
  {
    label: "Instagram",
    value: "@agenciacromos",
    href: "https://www.instagram.com/agenciacromos/",
    external: true,
  },
];

export function FooterContactColumn() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="font-headline text-white">Conecte-se com a gente</h3>
      <ul className="mt-3 flex flex-col gap-3 text-sm text-gray-400">
        {CONTACT_ITEMS.map((item) => (
          <li key={item.label} className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.24em] text-white/50">
              {item.label}
            </span>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="cursor-pointer text-gray-400 transition hover:text-[color:var(--color-primary)]"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
