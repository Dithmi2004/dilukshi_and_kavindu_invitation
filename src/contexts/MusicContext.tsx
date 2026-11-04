import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

export type MusicStatus = 'idle' | 'playing' | 'paused' | 'unavailable';

interface MusicContextValue {
  status: MusicStatus;
  play: () => void;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);
const VIDEO_ID = 'mpgt-fCuzLI';

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const readyRef = useRef(false);
  const wantsPlayRef = useRef(false);
  const [status, setStatus] = useState<MusicStatus>('idle');
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&controls=0&disablekb=1&fs=0&playsinline=1&enablejsapi=1&loop=1&playlist=${VIDEO_ID}&origin=${encodeURIComponent(window.location.origin)}`;

  const sendCommand = useCallback((func: 'playVideo' | 'pauseVideo') => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      'https://www.youtube.com',
    );
  }, []);

  const play = useCallback(() => {
    wantsPlayRef.current = true;
    if (readyRef.current) sendCommand('playVideo');
    setStatus('playing');
  }, [sendCommand]);

  const toggle = useCallback(() => {
    if (wantsPlayRef.current) {
      wantsPlayRef.current = false;
      sendCommand('pauseVideo');
      setStatus('paused');
    } else {
      play();
    }
  }, [play, sendCommand]);

  const value = useMemo(() => ({ status, play, toggle }), [status, play, toggle]);

  return (
    <MusicContext.Provider value={value}>
      {children}
      <iframe
        ref={iframeRef}
        title="Wedding background music"
        src={embedUrl}
        width="200"
        height="200"
        tabIndex={-1}
        aria-hidden="true"
        allow="autoplay; encrypted-media"
        onLoad={() => {
          readyRef.current = true;
          if (wantsPlayRef.current) sendCommand('playVideo');
        }}
        onError={() => setStatus('unavailable')}
        style={{ position: 'fixed', left: '-10000px', top: 0, border: 0 }}
      />
    </MusicContext.Provider>
  );
}

export function useMusic(): MusicContextValue {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used within MusicProvider');
  return ctx;
}
