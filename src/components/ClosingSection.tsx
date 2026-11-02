import React from 'react';
import { wedding } from '../data/wedding';
import { GoldDivider } from './ornaments/GoldDivider';
import { LotusEmblem } from './ornaments/LotusEmblem';
import { BotanicalImage } from './ornaments/BotanicalImage';

export function ClosingSection() {
  const { closing, event, venue } = wedding;

  return (
    <footer className="paper relative overflow-hidden px-6 pb-14 pt-28 md:pt-36">
      <BotanicalImage corner="bl" className="bottom-0 left-0 w-40 opacity-90 md:w-72" />
      <BotanicalImage corner="br" className="bottom-0 right-0 w-40 opacity-90 md:w-72" />

      <div className="relative mx-auto max-w-2xl text-center">
        <LotusEmblem className="mx-auto h-9 w-14 text-gold" />
        <h2 className="text-balance mt-6 font-serif text-3xl font-medium leading-snug text-forest md:text-[2.6rem] md:leading-tight">
          {closing.title}
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-serif text-xl italic leading-relaxed text-forest/85">
          {closing.message}
        </p>

        <GoldDivider className="mt-10" />

        <p className="mt-10 font-display text-xs uppercase tracking-[0.3em] text-gold-deep">
          {closing.signOff}
        </p>
        <p className="mt-2 font-script text-5xl text-forest md:text-6xl">{closing.signature}</p>

        <p className="mt-24 font-display text-[10px] uppercase tracking-[0.3em] text-forest/70 md:mt-28">
          {event.shortDateLabel} · {venue.name}
        </p>
      </div>
    </footer>);

}