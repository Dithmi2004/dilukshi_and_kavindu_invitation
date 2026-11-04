import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { wedding } from "../data/wedding";
import { easeOut } from "../utils/motion";
import { LotusEmblem } from "./ornaments/LotusEmblem";

interface InvitationCoverProps {
  onOpenStart: () => void;
  onOpened: () => void;
}

function RingDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`ring-divider ${className}`} aria-hidden="true">
      <span />
      <img className="ring-art" src="/ring-removebg-preview.png" alt="" />
      <span />
    </div>
  );
}

const rainHearts = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  left: `${(index * 47 + 9) % 100}%`,
  delay: (index % 12) * 0.09,
  duration: 1.15 + (index % 5) * 0.16,
  drift: ((index * 13) % 70) - 35,
}));

export function InvitationCover({
  onOpenStart,
  onOpened,
}: InvitationCoverProps) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);
  const [revealStage, setRevealStage] = useState<"idle" | "rain" | "formed">("idle");
  const lockRef = useRef(false);
  const revealTimers = useRef<number[]>([]);
  const { bride, groom, event, invitation, monogram } = wedding;

  useEffect(() => () => revealTimers.current.forEach(window.clearTimeout), []);

  const handleOpen = () => {
    if (lockRef.current) return;
    lockRef.current = true;
    setOpening(true);
    onOpenStart();
    if (reduce) {
      revealTimers.current.push(window.setTimeout(onOpened, 60));
      return;
    }
    setRevealStage("rain");
    revealTimers.current.push(window.setTimeout(() => setRevealStage("formed"), 1500));
    revealTimers.current.push(window.setTimeout(onOpened, 3900));
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation"
      className="paper invitation-cover fixed inset-0 z-50 overflow-y-auto"
      exit={{ opacity: 0, transition: { duration: 0.3, ease: easeOut } }}
    >
      <div className="cover-stage">
        <motion.article
          onClick={handleOpen}
          className="invitation-card"
          initial={
            reduce ? false : { opacity: 0, y: 52, rotateX: 7, scale: 0.94 }
          }
          animate={
            opening
              ? {
                  opacity: 0,
                  y: reduce ? 0 : -34,
                  rotateX: 0,
                  scale: reduce ? 1 : 0.97,
                }
              : { opacity: 1, y: 0, rotateX: 0, scale: 1 }
          }
          whileHover={
            !reduce && !opening
              ? {
                  y: -7,
                  scale: 1.008,
                  boxShadow:
                    "0 28px 68px rgba(34,54,40,.3), 0 8px 24px rgba(34,54,40,.16)",
                }
              : undefined
          }
          whileTap={!reduce && !opening ? { scale: 0.985 } : undefined}
          transition={
            opening
              ? { duration: 0.36, ease: easeOut, delay: 0.08 }
              : {
                  type: "spring",
                  stiffness: 72,
                  damping: 18,
                  mass: 1.1,
                  delay: 0.08,
                }
          }
          style={{ transformPerspective: 1200 }}
        >
          <div className="card-border" aria-hidden="true" />
          <div className="card-border card-border-inner" aria-hidden="true" />
          <div className="card-content">
            <div className="lotus-lockup reveal-lotus">
              <span />
              <LotusEmblem className="lotus-mark" />
              <span />
            </div>
            <p className="cover-heading reveal-heading">
              {invitation.coverOpening}
            </p>
            <div className="mini-ornament reveal-divider" aria-hidden="true">
              <span />
              <svg viewBox="0 0 34 14">
                <path d="M17 1 23 7l-6 6-6-6 6-6Z" />
                <path d="M6 4 9 7l-3 3-3-3 3-3Zm22 0 3 3-3 3-3-3 3-3Z" />
              </svg>
              <span />
            </div>

            <section className="partner-block bride-block" aria-label="Bride">
              <p className="parent-names reveal-text">{bride.parents}</p>
              <p className="request-line reveal-text">
                {invitation.parentsRequest} {bride.relation}
              </p>
              <p className="partner-name bride-name reveal-name">
                <span>Dilukshi</span>
              </p>
            </section>

            <RingDivider className="couple-divider reveal-divider" />

            <section className="partner-block groom-block" aria-label="Groom">
              <p className="parent-names reveal-text">{groom.parents}</p>
              <p className="request-line reveal-text">
                {invitation.parentsRequest} {groom.relation}
              </p>
              <p className="partner-name groom-name reveal-name">
                <span>Kavindu</span>
              </p>
            </section>

            <div className="date-divider reveal-divider" aria-hidden="true">
              <span />
              <svg viewBox="0 0 40 16">
                <path d="M20 1 26 8l-6 7-6-7 6-7Z" />
                <path d="M2 8h10m16 0h10" />
              </svg>
              <span />
            </div>
            <p className="wedding-date reveal-text">{event.shortDateLabel}</p>
            <div className="open-invitation reveal-seal">
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen();
                }}
                disabled={opening}
                aria-label="Open the invitation"
                className="open-seal"
                animate={
                  opening
                    ? { scale: 0.9, opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.18, ease: easeOut }}
              >
                {!reduce && !opening && (
                  <motion.span
                    aria-hidden="true"
                    className="seal-pulse"
                    animate={{ scale: [1, 1.4], opacity: [0.55, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                <span className="seal-inner" aria-hidden="true" />
                <span className="seal-monogram">{monogram}</span>
              </motion.button>
              <p className="open-caption">Tap to open</p>
            </div>
          </div>
        </motion.article>
      </div>
      <AnimatePresence>
        {revealStage !== "idle" && (
          <motion.div
            className="name-rain-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            aria-live="polite"
            aria-label={revealStage === "formed" ? "Dilukshi & Kavindu" : "Opening the invitation"}
          >
            <motion.div
              className="rain-heart-field"
              animate={{ opacity: revealStage === "rain" ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              aria-hidden="true"
            >
              {rainHearts.map((particle) => (
                <motion.svg
                  key={particle.id}
                  className="rain-heart"
                  viewBox="0 0 24 24"
                  style={{ left: particle.left }}
                  initial={{ y: "-12vh", opacity: 0 }}
                  animate={{ y: "108vh", x: particle.drift, rotate: [0, 18, -14, 8], opacity: [0, 0.8, 0.7, 0] }}
                  transition={{ duration: particle.duration, delay: particle.delay, repeat: 1, ease: "linear" }}
                >
                  <path d="M12 21s-8.2-4.8-10.2-10C.2 6.8 2.4 3 6 3c2.3 0 4.2 1.3 6 3.4C13.8 4.3 15.7 3 18 3c3.6 0 5.8 3.8 4.2 8C20.2 16.2 12 21 12 21Z" fill="currentColor" />
                </motion.svg>
              ))}
            </motion.div>
            <motion.div
              className="formed-names"
              initial={{ opacity: 0, scale: 0.88, y: 14 }}
              animate={revealStage === "formed" ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.94, y: 8 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <motion.svg className="formed-heart" viewBox="0 0 100 90" fill="none" aria-hidden="true">
                <motion.path
                  d="M50 80 15 46C-2 25 14 5 33 8c9 1 15 7 17 14 4-7 10-13 19-14 19-3 35 17 18 38L50 80Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={revealStage === "formed" ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.svg>
              <p>Dilukshi <span>&</span> Kavindu</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
