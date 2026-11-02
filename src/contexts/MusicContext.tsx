import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState } from
'react';
import { wedding } from '../data/wedding';

export type MusicStatus = 'idle' | 'playing' | 'paused' | 'unavailable';

interface MusicContextValue {
  status: MusicStatus;
  play: () => void;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: {children: React.ReactNode;}) {
  const { music } = wedding;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<MusicStatus>(
    music.enabled ? 'idle' : 'unavailable'
  );

  useEffect(() => {
    if (!music.enabled) return;
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'metadata';
    audio.volume = music.volume;

    const onError = () => setStatus('unavailable');
    const onPlay = () => setStatus('playing');
    const onPause = () =>
    setStatus((s) => s === 'unavailable' ? s : 'paused');

    audio.addEventListener('error', onError);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.src = music.src;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('error', onError);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audioRef.current = null;
    };
  }, [music.enabled, music.src, music.volume]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || status === 'unavailable') return;
    // Must be called synchronously from a user gesture (autoplay policies).
    audio.play().catch(() => {
      setStatus((s) => s === 'unavailable' ? s : 'paused');
    });
  }, [status]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || status === 'unavailable') return;
    if (status === 'playing') audio.pause();else
    play();
  }, [status, play]);

  const value = useMemo(() => ({ status, play, toggle }), [status, play, toggle]);

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}

export function useMusic(): MusicContextValue {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used within MusicProvider');
  return ctx;
}