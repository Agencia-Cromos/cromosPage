import { ContactIntro } from "@/components/fragments/fundador/contact/ContactIntro";
import { ContactMethods } from "@/components/fragments/fundador/contact/ContactMethods";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(140deg,_rgba(76,159,255,0.22),_rgba(10,14,24,0.92),_rgba(255,215,120,0.18))] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.15),_transparent_60%)]" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-6 text-center text-white">
        <ContactIntro />
        <ContactMethods />
      </div>
    </section>
  );
}
