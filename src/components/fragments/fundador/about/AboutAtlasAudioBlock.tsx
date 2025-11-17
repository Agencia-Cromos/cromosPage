import { AtlasAudioPlayer } from "@/components/common/AtlasAudioPlayer";

type AboutAtlasAudioBlockProps = {
  audioSrc: string;
};

export function AboutAtlasAudioBlock({ audioSrc }: AboutAtlasAudioBlockProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/[0.06] p-4 text-white/80 shadow-[0_16px_36px_rgba(6,10,22,0.35)] backdrop-blur">
      <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
        Atlas, meu assistente de IA, tem algo a dizer
      </span>
      <p className="text-sm text-white/75">
        Aperte o play para ouvir o Atlas se apresentando e entender como ele me acompanha nos projetos.
      </p>
      <AtlasAudioPlayer
        src={audioSrc}
        labels={{
          play: "Reproduzir audio do Atlas",
          pause: "Pausar audio do Atlas",
          timeline: "Linha do tempo do audio do Atlas",
        }}
      />
    </div>
  );
}

