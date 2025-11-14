type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

const STARS = Array.from({ length: 5 });

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={className ? `h-4 w-4 ${className}` : "h-4 w-4"}
      fill="currentColor"
    >
      <path d="M10 1.5 12.472 7.1l5.778.421-4.365 3.708 1.321 5.611L10 13.99l-5.206 2.85 1.321-5.611L1.75 7.521l5.778-.421L10 1.5Z" />
    </svg>
  );
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.25)]">
      <div className="flex items-center gap-1 text-yellow-400">
        {STARS.map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-300">{quote}</p>
      <div className="mt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </article>
  );
}
