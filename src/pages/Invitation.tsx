import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMusic } from '../contexts/MusicContext';
import { InvitationCover } from '../components/InvitationCover';
import { FloatingPetals } from '../components/FloatingPetals';
import { HeroSection } from '../components/HeroSection';
import { InvitationMessage } from '../components/InvitationMessage';
import { CountdownSection } from '../components/CountdownSection';
import { WeddingDetails } from '../components/WeddingDetails';
import { VenueSection } from '../components/VenueSection';
import { RsvpSection } from '../components/RsvpSection';
import { ClosingSection } from '../components/ClosingSection';
import { MusicControl } from '../components/MusicControl';

export function Invitation() {
  const { play } = useMusic();
  const [isOpen, setIsOpen] = useState(false);
  const [showPetals, setShowPetals] = useState(false);
  const petalTimer = useRef<number>();

  useEffect(() => {
    document.body.style.overflow = isOpen ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => () => window.clearTimeout(petalTimer.current), []);

  const handleOpenStart = () => {
    play();
    setShowPetals(true);
    petalTimer.current = window.setTimeout(() => setShowPetals(false), 9000);
  };

  const handleOpened = () => {
    window.scrollTo(0, 0);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-ivory font-serif text-forest">
      <AnimatePresence>
        {!isOpen &&
        <InvitationCover key="cover" onOpenStart={handleOpenStart} onOpened={handleOpened} />
        }
      </AnimatePresence>

      {showPetals && <FloatingPetals />}

      <main aria-hidden={!isOpen}>
        <HeroSection revealed={isOpen} />
        <InvitationMessage />
        <CountdownSection />
        <WeddingDetails />
        <VenueSection />
        <RsvpSection />
      </main>
      <ClosingSection />

      {isOpen && <MusicControl />}
    </div>);

}
