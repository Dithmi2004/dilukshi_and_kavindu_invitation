import { useEffect, useState } from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000 % 24),
    minutes: Math.floor(diff / 60_000 % 60),
    seconds: Math.floor(diff / 1000 % 60),
    isPast: false
  };
}

/**
 * Returns null until mounted on the client so server and client markup match
 * (no hydration mismatch in SSR frameworks like Next.js).
 */
export function useCountdown(targetISO: string): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const initial = getTimeLeft(target);
    setTimeLeft(initial);
    if (initial.isPast) return;

    const id = window.setInterval(() => {
      const next = getTimeLeft(target);
      setTimeLeft(next);
      if (next.isPast) window.clearInterval(id);
    }, 1000);

    return () => window.clearInterval(id);
  }, [targetISO]);

  return timeLeft;
}