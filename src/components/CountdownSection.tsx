import React from 'react';
import { wedding } from '../data/wedding';
import { useCountdown } from '../hooks/useCountdown';
import { LotusEmblem } from './ornaments/LotusEmblem';

export function CountdownSection() {
  const timeLeft = useCountdown(wedding.event.startISO);
  const units = [
    { label: 'Days', value: timeLeft?.days },
    { label: 'Hours', value: timeLeft?.hours },
    { label: 'Minutes', value: timeLeft?.minutes },
    { label: 'Seconds', value: timeLeft?.seconds }
  ];

  return (
    <section aria-labelledby="countdown-title" className="countdown-section">
      <div className="countdown-frame" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="countdown-content">
        <LotusEmblem className="countdown-lotus" />
        {timeLeft?.isPast ? (
          <>
            <h2 id="countdown-title" className="countdown-title">Our forever has begun</h2>
            <p className="countdown-after-message">
              Thank you for celebrating {wedding.event.shortDateLabel} with us.
            </p>
          </>
        ) : (
          <>
            <h2 id="countdown-title" className="countdown-title">Counting down to our day</h2>
            <p className="countdown-date">{wedding.event.shortDateLabel} · 9:30 AM Sri Lanka time</p>
            <div role="timer" aria-live="off" className="countdown-units">
              {units.map((unit) => (
                <div key={unit.label} className="countdown-unit">
                  <span className="countdown-number">
                    {unit.value === undefined ? '––' : String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="countdown-label">{unit.label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
