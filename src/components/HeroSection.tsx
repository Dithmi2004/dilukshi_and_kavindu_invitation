import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { CalendarDays, Clock3, Heart, MapPin } from 'lucide-react';
import { wedding } from '../data/wedding';
import { easeOut } from '../utils/motion';
import { CoupleIllustration } from './CoupleIllustration';

export function HeroSection({ revealed }: { revealed: boolean }) {
  const reduce = useReducedMotion();
  const { bride, groom, event, venue, monogram, invitation } = wedding;

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } },
  };
  const enter: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
  };
  const [weekday, date] = event.dateLabel.split(', ');

  return (
    <section aria-labelledby="hero-title" className="hero-section">
      <div className="hero-shell">
        <motion.div className="hero-copy" variants={list} initial="hidden" animate={revealed ? 'show' : 'hidden'}>
          <motion.div variants={enter} className="hero-monogram" aria-label={`${monogram} monogram`}>
            <span>{monogram[0]}</span><i aria-hidden="true" /><span>{monogram[1]}</span>
          </motion.div>
          <motion.p variants={enter} className="hero-eyebrow">The Wedding Of</motion.p>
          <h1 id="hero-title" className="hero-names">
            <motion.span variants={enter} className="hero-bride-name">{bride.fullName}</motion.span>
            <motion.span variants={enter} className="hero-join" aria-label="and"><i /><span>&amp;</span><i /></motion.span>
            <motion.span variants={enter} className="hero-groom-name">{groom.fullName}</motion.span>
          </h1>
          <motion.div variants={enter} className="hero-details">
            <div className="hero-detail"><CalendarDays aria-hidden="true" /><p><strong>{weekday}</strong><span>{date}</span></p></div>
            <div className="hero-detail"><MapPin aria-hidden="true" /><p><strong>{venue.name}</strong><span>{venue.location}</span></p></div>
            <div className="hero-detail"><Clock3 aria-hidden="true" /><p><strong>Time</strong><span>{event.timeLabel}</span></p></div>
          </motion.div>
          <motion.div variants={enter} className="hero-signoff">
            <span />
            <p>{invitation.messageOpening.replace(/[.…]+$/, '')}</p>
            <Heart aria-hidden="true" fill="currentColor" />
          </motion.div>
          <motion.a variants={enter} className="hero-cta" href="#message-title">
            <Heart aria-hidden="true" fill="currentColor" /><span>Celebrate With Us</span>
          </motion.a>
        </motion.div>
        <motion.div className="hero-portrait" initial={reduce ? false : { opacity: 0, x: 24, scale: 0.98 }} animate={revealed ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: reduce ? 0 : 24, scale: 0.98 }} transition={{ duration: 0.8, ease: easeOut, delay: 0.28 }}>
          <CoupleIllustration />
        </motion.div>
      </div>
    </section>
  );
}
