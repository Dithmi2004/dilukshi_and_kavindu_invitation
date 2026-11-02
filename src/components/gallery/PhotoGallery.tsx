import React, { useCallback, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { wedding } from '../../data/wedding';
import { SectionHeading } from '../ornaments/SectionHeading';
import { GalleryImage } from './GalleryImage';
import { GalleryLightbox } from './GalleryLightbox';

export function PhotoGallery() {
  const { gallery } = wedding;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = (i: number, el: HTMLElement) => {
    triggerRef.current = el;
    setActiveIndex(i);
  };

  const close = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((i) =>
      i === null ? i : (i + dir + gallery.length) % gallery.length
      );
    },
    [gallery.length]
  );

  if (gallery.length === 0) return null;

  return (
    <section aria-labelledby="gallery-title" className="paper px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="gallery-title"
          title="Moments Together"
          subtitle="Engagement and pre-wedding memories" />
        

        <ul className="mt-14 grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-3 md:gap-4 lg:auto-rows-[230px]">
          {gallery.map((photo, i) =>
          <li key={photo.src} className={photo.aspect === 'portrait' ? 'row-span-2' : ''}>
              <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              aria-label={`View ${photo.caption}`}
              className="group relative block h-full w-full overflow-hidden border border-gold/40 bg-champagne outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory">
              
                <GalleryImage
                photo={photo}
                className="h-full w-full transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] group-active:scale-[0.99]" />
              
                <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 border border-ivory/0 transition-colors duration-200 group-hover:border-gold/70" />
              
              </button>
            </li>
          )}
        </ul>
      </div>

      <AnimatePresence>
        {activeIndex !== null &&
        <GalleryLightbox
          photos={gallery}
          index={activeIndex}
          onClose={close}
          onNavigate={navigate} />

        }
      </AnimatePresence>
    </section>);

}