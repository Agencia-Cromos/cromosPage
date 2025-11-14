'use client';

import { FormEvent } from "react";
 
 type ProjectSocialModalProps = {
  open: boolean;
  onDismiss: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ProjectSocialModal({ open, onDismiss, onSubmit }: ProjectSocialModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.22)]">
        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-4 top-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400 transition hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          X
        </button>
        <div className="mb-6 flex flex-col gap-3 text-left">
          <h3 className="font-headline text-2xl text-slate-900">
            Indicar negocio para o projeto social da CROMOS
          </h3>
          <p className="text-sm leading-relaxed text-slate-500">
            Deixe os dados basicos do negocio indicado para que possamos avaliar e entrar em contato.
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
            Nome da empresa
            <input
              name="companyName"
              type="text"
              required
              placeholder="Ex: Padaria Estrela do Bairro"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgba(59,130,246,0.35)]"
            />
          </label>

          <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
            Telefone (WhatsApp)
            <input
              name="contactPhone"
              type="tel"
              required
              placeholder="Ex: (11) 91234-5678"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgba(59,130,246,0.35)]"
            />
          </label>

          <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
            Email de contato
            <input
              name="contactEmail"
              type="email"
              required
              placeholder="Ex: contato@negocio.com"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgba(59,130,246,0.35)]"
            />
          </label>

          <div className="mt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onDismiss}
              className="cursor-pointer rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-gradient-primary px-6 py-2 text-sm font-semibold text-[color:var(--color-button-text)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[rgba(59,130,246,0.6)]"
            >
              Enviar indicacao
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
