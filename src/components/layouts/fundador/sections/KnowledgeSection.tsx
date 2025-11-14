"use client";

import { useEffect, useMemo, useState } from "react";
import {
  KNOWLEDGE_CATEGORIES,
  KNOWLEDGE_SKILL_OPTIONS,
  type KnowledgeCategory,
  type KnowledgeSkillType,
} from "@/components/fragments/fundador/knowledge/knowledgeData";
import { KnowledgeDetails } from "@/components/fragments/fundador/knowledge/KnowledgeDetails";

export function KnowledgeSection() {
  const defaultSkillFilter = KNOWLEDGE_SKILL_OPTIONS[0]?.value ?? "hard";
  const [skillFilter, setSkillFilter] = useState<KnowledgeSkillType>(defaultSkillFilter);
  const [selectedId, setSelectedId] = useState<string>(() => KNOWLEDGE_CATEGORIES[0]?.id ?? "");

  const filteredCategories = useMemo(
    () => KNOWLEDGE_CATEGORIES.filter((category) => category.skillType === skillFilter),
    [skillFilter]
  );

  const isSoftView = skillFilter === "soft";

  useEffect(() => {
    if (!filteredCategories.length) {
      setSelectedId("");
      return;
    }

    if (!filteredCategories.some((category) => category.id === selectedId)) {
      setSelectedId(filteredCategories[0]?.id ?? "");
    }
  }, [filteredCategories, selectedId]);

  const activeCategory: KnowledgeCategory | undefined = useMemo(() => {
    if (!filteredCategories.length) {
      return undefined;
    }

    return filteredCategories.find((category) => category.id === selectedId) ?? filteredCategories[0];
  }, [filteredCategories, selectedId]);

  const softSkillCards = useMemo(() => {
    if (!isSoftView) {
      return [];
    }

    return filteredCategories.map((category) => {
      const primaryEntry = category.entries[0];
      return {
        id: category.id,
        title: category.title,
        description: category.description,
        color: category.color,
        percentage: primaryEntry?.percentage ?? 0,
        badge: primaryEntry?.badge ?? "",
        label: primaryEntry?.technology ?? "",
        classification: primaryEntry?.classificationLabel ?? "",
      };
    });
  }, [filteredCategories, isSoftView]);

  return (
    <section
      id="knowledge"
      className="relative overflow-hidden bg-[linear-gradient(150deg,_#060A16_0%,_#101C33_45%,_#05080E_100%)] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,159,255,0.12),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
        <header className="mx-auto max-w-3xl text-center text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Insights tecnicos
          </span>
          <h2 className="mt-4 font-headline text-3xl sm:text-4xl">Competencias digitais em movimento</h2>
          <p className="mt-5 text-sm text-white/65 sm:text-base">
            Uma visao honesta sobre onde atuo com maior profundidade e quais frentes estou evoluindo. Ideal para
            recrutadores, lideres tecnicos e parceiros entenderem como posso contribuir desde o primeiro dia.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(6,10,22,0.35)]">
            <div className="flex flex-col gap-2 text-white/70">
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em]">Filtros</span>
              <p className="text-sm text-white/60">
                Escolha o tipo de habilidade e a frente que deseja analisar.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <label className="flex flex-col text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                <span className="mb-1 text-[10px]">Tipo</span>
                <select
                  value={skillFilter}
                  onChange={(event) => setSkillFilter(event.target.value as KnowledgeSkillType)}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-medium normal-case text-white shadow-[0_12px_30px_rgba(6,10,22,0.35)] outline-none transition focus:border-white/35 focus:ring-2 focus:ring-[#4C9FFF]/60 sm:text-sm"
                >
                  {KNOWLEDGE_SKILL_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#0B1323] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              {!isSoftView ? (
                <div className="flex flex-1 flex-wrap gap-2">
                  {filteredCategories.length ? (
                    filteredCategories.map((category) => {
                      const isActive = activeCategory?.id === category.id;
                      return (
                        <button
                          type="button"
                          key={category.id}
                          onClick={() => setSelectedId(category.id)}
                          aria-pressed={isActive}
                          className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] transition ${
                            isActive
                              ? "border-white/45 bg-white/15 text-white shadow-[0_12px_30px_rgba(6,10,22,0.4)]"
                              : "border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:bg-white/[0.08]"
                          }`}
                          style={{ boxShadow: isActive ? `0 12px 30px ${category.color}35` : undefined }}
                        >
                          {category.filterLabel}
                        </button>
                      );
                    })
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                      Sem categorias para este filtro
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                  Soft skills listadas abaixo
                </span>
              )}
            </div>
          </div>

          {isSoftView ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {softSkillCards.length ? (
                softSkillCards.map((card) => (
                  <article
                    key={card.id}
                    className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-[0_18px_45px_rgba(6,10,22,0.35)] transition hover:border-white/25 hover:bg-white/[0.1]"
                    style={{ boxShadow: `0 18px 45px ${card.color}26` }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                          {card.title}
                        </span>
                        <p className="text-sm text-white/70">{card.description}</p>
                      </div>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                        {card.percentage}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                      <span>
                        {card.badge} {card.label}
                      </span>
                      <span className="text-white/65">{card.classification}</span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center text-white/70">
                  <p className="text-sm">Nenhuma soft skill registrada.</p>
                  <button
                    type="button"
                    onClick={() => setSkillFilter(defaultSkillFilter)}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40"
                  >
                    Voltar para hard skills
                  </button>
                </div>
              )}
            </div>
          ) : activeCategory ? (
            <KnowledgeDetails key={activeCategory.id} category={activeCategory} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center text-white/70">
              <p className="text-sm">Nenhuma habilidade encontrada para este filtro.</p>
              <button
                type="button"
                onClick={() => setSkillFilter(defaultSkillFilter)}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40"
              >
                Resetar filtro
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
