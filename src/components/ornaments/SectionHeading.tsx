import React from 'react';
import { LotusEmblem } from './LotusEmblem';
import { GoldDivider } from './GoldDivider';

interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <LotusEmblem className="mx-auto h-8 w-12 text-gold" />
      <h2
        id={id}
        className="mt-4 font-display text-xl uppercase tracking-[0.24em] text-forest md:text-2xl">
        
        {title}
      </h2>
      <GoldDivider className="mt-5" />
      {subtitle &&
      <p className="mx-auto mt-5 max-w-md font-serif text-lg italic text-forest/80">
          {subtitle}
        </p>
      }
    </div>);

}