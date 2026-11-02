import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MusicIcon, VolumeXIcon } from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';
import { easeOut } from '../utils/motion';

function Equalizer() {
  const reduce = useReducedMotion();
  const bars = [0.55, 1, 0.75];
  return (
    <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
      {bars.map((h, i) =>
      <motion.span
        key={i}
        className="w-[3px] origin-bottom rounded-full bg-forest"
        style={{ height: '100%', scaleY: h }}
        animate={reduce ? undefined : { scaleY: [h, 0.3, 1, h] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'linear', delay: i * 0.15 }} />

      )}
    </span>);

}

export function MusicControl() {
  const { status, toggle } = useMusic();
  const unavailable = status === 'unavailable';
  const playing = status === 'playing';

  const label = unavailable ?
  'Music coming soon' :
  playing ?
  'Pause music' :
  'Play music';

  return (
    <motion.div
      className="group fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: easeOut, delay: 0.4 }}>
      
      <button
        type="button"
        onClick={toggle}
        disabled={unavailable}
        aria-pressed={playing}
        aria-label={unavailable ? 'Background music unavailable' : playing ? 'Pause background music' : 'Play background music'}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory text-forest shadow-soft outline-none transition-[background-color,transform] duration-150 hover:bg-champagne focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-ivory">
        
        {playing ?
        <Equalizer /> :
        unavailable ?
        <VolumeXIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" /> :

        <MusicIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
        }
      </button>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-forest px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.18em] text-ivory opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        
        {label}
      </span>
    </motion.div>);

}