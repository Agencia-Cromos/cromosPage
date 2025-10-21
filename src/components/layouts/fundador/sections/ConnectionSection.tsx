import { ConnectionBrand } from "@/components/fragments/fundador/connection/ConnectionBrand";
import { ConnectionContent } from "@/components/fragments/fundador/connection/ConnectionContent";
import { ConnectionCta } from "@/components/fragments/fundador/connection/ConnectionCta";

export function ConnectionSection() {
  return (
    <section
      id="connection"
      className="relative overflow-hidden bg-[color:var(--color-bg-light,#0F172A)] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(122,228,255,0.18),_rgba(15,20,34,0.95))]" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <ConnectionBrand />
        <ConnectionContent />
        <ConnectionCta />
      </div>
    </section>
  );
}
