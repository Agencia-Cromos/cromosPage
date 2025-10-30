"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
} from "react";

type AtlasAudioPlayerProps = {
  src: string;
  className?: string;
  autoPlay?: boolean;
  labels?: {
    play?: string;
    pause?: string;
    timeline?: string;
  };
};

export function AtlasAudioPlayer({
  src,
  className = "",
  autoPlay = false,
  labels = {},
}: AtlasAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const playLabel = labels.play ?? "Reproduzir audio";
  const pauseLabel = labels.pause ?? "Pausar audio";
  const timelineLabel = labels.timeline ?? "Linha do tempo do audio";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const syncDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleLoadedMetadata = () => {
      syncDuration();
    };

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(audio.duration || 0);
    };

    if (audio.readyState >= 1) {
      syncDuration();
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    void audio.play().catch(() => {
      setIsPlaying(false);
    });
  }, [autoPlay]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      return;
    }

    void audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const value = Number(event.target.value);
    audio.currentTime = value;
    setProgress(value);
  };

  const formatTime = (value: number) => {
    if (!Number.isFinite(value) || value <= 0) {
      return "0:00";
    }

    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const safeProgress = duration ? Math.min(progress, duration) : 0;
  const progressPercent = duration ? (safeProgress / duration) * 100 : 0;
  const sliderStyles = {
    "--atlas-progress": `${progressPercent}%`,
  } as CSSProperties;

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#050A16]/45 p-4 shadow-[0_12px_26px_rgba(6,10,22,0.45)] sm:flex-row sm:items-center sm:gap-6 sm:p-5 ${className}`}
    >
      <button
        type="button"
        onClick={togglePlayback}
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#7AE4FF,_#4C9FFF)] text-[#041021] shadow-[0_20px_40px_rgba(76,159,255,0.45)] transition hover:shadow-[0_24px_48px_rgba(122,228,255,0.55)]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7AE4FF]"
        aria-label={isPlaying ? pauseLabel : playLabel}
      >
        {isPlaying ? (
          <svg aria-hidden viewBox="0 0 48 48" className="h-6 w-6 fill-current">
            <rect x="12" y="10" width="8" height="28" rx="2" />
            <rect x="28" y="10" width="8" height="28" rx="2" />
          </svg>
        ) : (
          <svg aria-hidden viewBox="0 0 48 48" className="h-6 w-6 fill-current">
            <path d="M18 12.5c0-2.3 2.5-3.7 4.4-2.4l14 9.5c1.7 1.1 1.7 3.7 0 4.8l-14 9.5c-1.9 1.3-4.4-0.1-4.4-2.4z" />
          </svg>
        )}
      </button>
      <div className="flex w-full flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
          <span>{formatTime(safeProgress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={duration || 1}
          step={0.1}
          value={safeProgress}
          onChange={handleSeek}
          aria-label={timelineLabel}
          className="atlas-audio-slider h-2 w-full"
          style={sliderStyles}
        />
      </div>
      <audio ref={audioRef} preload="metadata" src={src} className="hidden" />
    </div>
  );
}
