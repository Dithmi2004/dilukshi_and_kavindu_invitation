import React from 'react';
import { wedding } from '../data/wedding';
import { GoldDivider } from './ornaments/GoldDivider';
import { LotusEmblem } from './ornaments/LotusEmblem';

export function ClosingSection() {
  const { closing, event, venue } = wedding;

  return (
    <footer className="closing-section">
      <img src="/download%20(1).png" alt="" aria-hidden="true" className="closing-flower closing-flower-left" />
      <img src="/download%20(1).png" alt="" aria-hidden="true" className="closing-flower closing-flower-right" />
      <div className="closing-content">
        <LotusEmblem className="closing-lotus" />
        <h2 className="closing-title">{closing.title}</h2>
        <p className="closing-message">{closing.message}</p>
        <GoldDivider className="closing-divider" />
        <p className="closing-signoff">{closing.signOff}</p>
        <p className="closing-signature">{closing.signature}</p>
        <p className="closing-eventline">{event.shortDateLabel} · {venue.name}</p>
      </div>
    </footer>
  );
}
