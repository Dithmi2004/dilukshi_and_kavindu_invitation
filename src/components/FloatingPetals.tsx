import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const colors = ['#A8B8A0', '#758B78', '#F3E9D7', '#B69A62'];

export function FloatingPetals() {
  const reduce = useReducedMotion();

  const petals = useMemo(
    () =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.8,
      duration: 5 + Math.random() * 3,
      size: 10 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 140,
      rotate: Math.random() * 360,
      color: colors[i % colors.length]
    })),
    []
  );

  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {petals.map((p) =>
      <motion.svg
        key={p.id}
        viewBox="0 0 20 20"
        width={p.size}
        height={p.size}
        className="absolute top-0"
        style={{ left: `${p.left}%` }}
        initial={{ y: '-10vh', x: 0, rotate: p.rotate, opacity: 0 }}
        animate={{
          y: '110vh',
          x: p.drift,
          rotate: p.rotate + 240,
          opacity: [0, 0.9, 0.9, 0]
        }}
        transition={{ duration: p.duration, delay: p.delay, ease: 'linear' }}>
        
          <path
          d="M10 0C16 6 16 14 10 20C4 14 4 6 10 0Z"
          fill={p.color}
          stroke="#B69A62"
          strokeOpacity={0.35}
          strokeWidth={0.6} />
        
        </motion.svg>
      )}
    </div>);

}