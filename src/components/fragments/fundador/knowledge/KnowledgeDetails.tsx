"use client";

import type { KnowledgeCategory } from "./knowledgeData";

type KnowledgeDetailsProps = {
  category: KnowledgeCategory;
};

export function KnowledgeDetails({ category }: KnowledgeDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Conhecimentos</span>
        <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
        <p className="text-sm text-white/65">{category.description}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {category.entries.map((entry) => (
          <article
            key={entry.technology}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0B1323]/70 p-4 shadow-[0_18px_45px_rgba(6,10,22,0.4)] transition duration-300 hover:border-white/25 hover:bg-[#101c33]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <span>{entry.badge}</span>
                <span>{entry.technology}</span>
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                {entry.classificationLabel}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[rgba(122,228,255,0.9)] via-[rgba(76,159,255,0.95)] to-[rgba(255,215,120,0.8)]"
                  style={{ width: `${entry.percentage}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-white/80">{entry.percentage}%</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
