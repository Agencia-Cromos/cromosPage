type ProjectSocialTextBlockProps = {
  onRequestModal: () => void;
};

export function ProjectSocialTextBlock({ onRequestModal }: ProjectSocialTextBlockProps) {
  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-4">
        <p className="font-headline text-sm uppercase tracking-[0.34em] text-[color:var(--color-gray-500)]">
          Projeto Social
        </p>
        <h2 className="font-headline text-3xl text-slate-900 sm:text-[2.5rem]">
          Tecnologia a servico de quem faz a diferenca.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-gray-600)] sm:text-lg">
          A Cromos apoia pequenos negocios que precisam iniciar sua jornada digital. Criamos paginas
          simples, funcionais e sem custo inicial para quem quer modernizar produtos, servicos e
          processos com proposito.
        </p>
      </div>
      <p className="text-sm text-[color:var(--color-gray-500)]">
        Selecionamos projetos locais com impacto positivo para cocriar experiencias digitais que
        movimentam a economia e fortalecem a comunidade.
      </p>
      <div>
        <button
          type="button"
          onClick={onRequestModal}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-primary bg-[length:200%_200%] px-6 py-3 font-semibold text-[color:var(--color-button-text)] shadow-[0_0_22px_rgba(124,209,255,0.35)] transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(59,130,246,0.6)] animate-[gradientFlow_14s_linear_infinite]"
        >
          Quero fazer parte
        </button>
      </div>
    </div>
  );
}
