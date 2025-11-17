import Link from "next/link";

type ContactMethodCardProps = {
  label: string;
  value: string;
  href: string;
};

export function ContactMethodCard({ label, href, value }: ContactMethodCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:border-white/35 hover:bg-white/16 hover:shadow-[0_18px_45px_rgba(122,228,255,0.25)]">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">{label}</p>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="mt-3 block text-base font-medium text-white/90 transition duration-300 hover:text-white"
      >
        {value}
      </Link>
    </div>
  );
}

