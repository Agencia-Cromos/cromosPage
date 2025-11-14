type ProjectSocialTextBlockProps = {
  onRequestModal: () => void;
};

export function ProjectSocialTextBlock({ onRequestModal }: ProjectSocialTextBlockProps) {
  return (
    <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:text-left">
      <div className="flex flex-col gap-6">
        <p className="font-semibold uppercase tracking-[0.32em] text-[color:var(--color-gray-500)]">
          Projeto Social
        </p>
        <h2 className="font-sans text-3xl font-semibold leading-tight text-slate-900 sm:text-[2.85rem] sm:leading-[1.04]">
          <span className="block">Tecnologia a serviço</span>
          <span className="block text-[color:var(--color-gray-700)] lg:text-[color:var(--color-gray-800)]">
            de quem faz a diferença.
          </span>
        </h2>
        <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[color:var(--color-gray-600)] sm:text-lg lg:mx-0">
          A CROMOS acompanha iniciativas que colocam pessoas no centro. No Projeto Social, aplicamos
          tecnologia, branding e estratégia digital para criar presenças on-line completas para negócios da
          comunidade que merecem ganhar escala com cuidado e confiança.
        </p>
      </div>

      <p className="mx-auto max-w-[560px] text-sm leading-7 text-[color:var(--color-gray-500)] sm:text-base lg:mx-0">
        Cada projeto recebe design responsivo, linguagem alinhada e mentoria de conteúdo para manter o site vivo
        depois da entrega. Selecionamos histórias com impacto real, que fortalecem redes locais e mostram como
        tecnologia pode ser ferramenta de empatia.
      </p>

      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-start lg:items-center">
        <button
          type="button"
          onClick={onRequestModal}
          className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-transparent bg-[linear-gradient(135deg,rgba(90,150,255,0.96),rgba(136,128,255,0.94)_58%,rgba(192,158,255,0.92))] px-8 py-[0.95rem] font-semibold tracking-tight text-[color:var(--color-button-text)] shadow-[0_28px_64px_rgba(82,118,255,0.24)] transition-all duration-400 hover:brightness-105 hover:shadow-[0_32px_72px_rgba(94,132,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#8da6ff] sm:w-auto"
        >
          <span className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.58),rgba(255,255,255,0))]" />
          <span>Quero fazer parte</span>
        </button>
      </div>
    </div>
  );
}
