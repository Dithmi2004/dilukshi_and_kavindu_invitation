import React from 'react';
import { wedding } from '../../data/wedding';

type Corner = 'tl' | 'tr' | 'bl' | 'br';

const flip: Record<Corner, string> = {
  tl: '',
  tr: '-scale-x-100',
  bl: '-scale-y-100',
  br: 'rotate-180'
};

interface BotanicalImageProps {
  corner: Corner;
  className?: string;
}

/** Watercolour foliage that blends into the ivory paper via multiply. */
export function BotanicalImage({ corner, className = '' }: BotanicalImageProps) {
  return (
    <img
      src={wedding.images.botanicalCorner}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable={false}
      className={`pointer-events-none absolute select-none mix-blend-multiply ${flip[corner]} ${className}`} />);


}