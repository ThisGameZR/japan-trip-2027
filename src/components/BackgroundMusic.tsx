import { useCallback, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'japan2027-music-enabled';
const AUDIO_SRC = '/audio/winter-ambient.mp3';
const VOLUME = 0.12;

function isAudioPlaying(audio: HTMLAudioElement) {
  return !audio.paused && !audio.ended;
}

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = VOLUME;
    audioRef.current = audio;

    const syncPlaying = () => setPlaying(isAudioPlaying(audio));

    const tryPlay = async () => {
      if (localStorage.getItem(STORAGE_KEY) === '0') {
        syncPlaying();
        return false;
      }

      try {
        await audio.play();
        localStorage.setItem(STORAGE_KEY, '1');
        return true;
      } catch {
        syncPlaying();
        return false;
      }
    };

    const onCanPlay = () => {
      setReady(true);
      void tryPlay().then((started) => {
        if (started) return;

        const resumeOnInteraction = () => {
          void tryPlay();
        };

        window.addEventListener('pointerdown', resumeOnInteraction, { once: true });
        window.addEventListener('keydown', resumeOnInteraction, { once: true });
      });
    };

    audio.addEventListener('play', syncPlaying);
    audio.addEventListener('pause', syncPlaying);
    audio.addEventListener('ended', syncPlaying);
    audio.addEventListener('canplaythrough', onCanPlay);

    return () => {
      audio.removeEventListener('play', syncPlaying);
      audio.removeEventListener('pause', syncPlaying);
      audio.removeEventListener('ended', syncPlaying);
      audio.removeEventListener('canplaythrough', onCanPlay);
      audio.pause();
      audioRef.current = null;
      setPlaying(false);
    };
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioPlaying(audio)) {
      audio.pause();
      localStorage.setItem(STORAGE_KEY, '0');
      return;
    }

    try {
      await audio.play();
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      setPlaying(false);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={!ready}
      className="fixed right-4 z-[1200] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-primary/90 text-slate-100 shadow-lg shadow-black/25 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-400 disabled:cursor-wait disabled:opacity-60 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:bottom-6"
      aria-label={playing ? 'ปิดเพลงพื้นหลัง' : 'เปิดเพลงพื้นหลัง'}
      aria-pressed={playing}
      title={playing ? 'ปิดเพลง' : 'เปิดเพลง'}
    >
      <i
        className={`fa-solid text-base ${playing ? 'fa-volume-high animate-icon-pop' : 'fa-volume-xmark'}`}
        aria-hidden="true"
      />
    </button>
  );
}
