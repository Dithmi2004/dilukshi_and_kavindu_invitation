import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import type { GalleryPhoto } from '../../types/wedding';

interface GalleryImageProps {
  photo: GalleryPhoto;
  className?: string;
  fit?: 'cover' | 'contain';
}

/** Renders a configured photo, or a clearly labelled sample placeholder. */
export function GalleryImage({ photo, className = '', fit = 'cover' }: GalleryImageProps) {
  const [failed, setFailed] = useState(false);

  if (photo.isPlaceholder || failed) {
    return (
      <div
        role="img"
        aria-label={`Sample placeholder: ${photo.caption}`}
        className={`flex flex-col items-center justify-center gap-3 bg-champagne px-4 text-center ${className}`}>
        
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold-deep">
          <ImageIcon className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />
        </span>
        <span className="font-display text-[10px] uppercase tracking-[0.24em] text-gold-deep">
          Sample placeholder
        </span>
        <span className="font-serif text-lg italic leading-tight text-forest">{photo.caption}</span>
        <span className="hidden font-serif text-xs text-forest/70 sm:block">{photo.src}</span>
      </div>);

  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${fit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`} />);


}