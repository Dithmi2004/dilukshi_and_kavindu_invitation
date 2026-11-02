import React from 'react';
import { wedding } from '../data/wedding';

function HeartDivider({ flourish = false }: { flourish?: boolean }) {
  return (
    <div className={`message-heart-divider${flourish ? ' message-heart-divider-flourish' : ''}`} aria-hidden="true">
      <span />
      {flourish ? <span className="message-flourish">‹❧</span> : null}
      <span className="message-heart">♥</span>
      {flourish ? <span className="message-flourish message-flourish-flip">❧›</span> : null}
      <span />
    </div>
  );
}

export function InvitationMessage() {
  const { messageOpening, messageParagraphs } = wedding.invitation;

  return (
    <section aria-labelledby="message-title" className="invitation-message-section">
      <div className="invitation-message-card">
        <img src="/flowers.png" alt="" aria-hidden="true" className="invitation-message-flowers" />
        <div className="invitation-message-content">
          <div className="message-monogram" aria-label={`${wedding.bride.firstName} and ${wedding.groom.firstName}`}>
            <span>{wedding.monogram.slice(0, 1)}</span>
            <i />
            <span>{wedding.monogram.slice(1)}</span>
          </div>
          <h2 id="message-title" className="message-script-heading">{messageOpening}</h2>
          <HeartDivider />
          <div className="message-paragraphs">
            {messageParagraphs.map((paragraph, index) => (
              <React.Fragment key={paragraph}>
                {index > 0 && <HeartDivider flourish />}
                <p>{paragraph}</p>
              </React.Fragment>
            ))}
          </div>
          <HeartDivider flourish />
        </div>
      </div>
    </section>
  );
}
