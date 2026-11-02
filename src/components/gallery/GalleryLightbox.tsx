import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryPhoto } from '../../types/wedding';
import { easeOut } from '../../utils/motion';
import { GalleryImage } from './GalleryImage';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
}

const navBtn =
'flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-forest-dark/60 text-ivory outline-none transition-colors duration-150 hover:bg-forest focus-visible:ring-2 focus-visible:ring-gold';

export function GalleryLightbox({ photos, index, onClose, onNavigate }: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();else
      if (e.key === 'ArrowRight') onNavigate(1);else
      if (e.key === 'ArrowLeft') onNavigate(-1);else
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>('button');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNavigate]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}: ${photo.caption}`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-dark/95 p-4 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: easeOut }}
      onClick={onClose}>
      
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className={`absolute right-4 top-4 z-10 sm:right-6 sm:top-6 ${navBtn}`}>
        
        <XIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </button>

      <figure
        className="relative flex w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}>
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="w-full">
            
            <GalleryImage
              photo={photo}
              fit="contain"
              className={`mx-auto max-h-[72vh] w-full border border-gold/40 ${
              photo.aspect === 'portrait' ? 'aspect-[3/4] max-w-md' : 'aspect-[3/2]'}`
              } />
            
          </motion.div>
        </AnimatePresence>
        <figcaption className="mt-5 text-center">
          <span className="block font-serif text-xl italic text-ivory">{photo.caption}</span>
          <span className="mt-1 block font-display text-[10px] uppercase tracking-[0.28em] text-gold">
            {index + 1} / {photos.length}
          </span>
        </figcaption>

        <div className="mt-5 flex gap-4 sm:mt-0">
          <button
            type="button"
            onClick={() => onNavigate(-1)}
            aria-label="Previous photo"
            className={`sm:absolute sm:-left-20 sm:top-1/2 sm:-translate-y-1/2 ${navBtn}`}>
            
            <ChevronLeftIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(1)}
            aria-label="Next photo"
            className={`sm:absolute sm:-right-20 sm:top-1/2 sm:-translate-y-1/2 ${navBtn}`}>
            
            <ChevronRightIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </figure>
    </motion.div>);

}