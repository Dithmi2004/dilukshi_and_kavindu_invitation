import React, { FormEvent, useState } from 'react';
import { CheckIcon, HeartIcon, MessageCircleIcon, XIcon } from 'lucide-react';
import { wedding } from '../data/wedding';
import { GoldDivider } from './ornaments/GoldDivider';

type Attendance = 'attending' | 'declining';

export function RsvpSection() {
  const [attendance, setAttendance] = useState<Attendance | null>('attending');
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [notice, setNotice] = useState('');

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recipient = wedding.rsvp.whatsappNumber.replace(/\D/g, '');
    if (!recipient) {
      setNotice('Please contact the couple directly to send your RSVP.');
      return;
    }

    const response = attendance === 'attending'
      ? `Hello! ${name} will attend the wedding.\n\nMy wish for the couple: ${wish || 'Wishing you a lifetime of love and happiness.'}`
      : `Hello! ${name} will not be able to attend the wedding.\n\nMy wish for the couple: ${wish || 'Wishing you a lifetime of love and happiness.'}`;
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(response)}`, '_blank', 'noopener,noreferrer');
    setNotice('Your WhatsApp message is ready to send.');
  };

  return (
    <section aria-labelledby="rsvp-title" className="rsvp-section">
      <img src="/download%20(1).png" alt="" aria-hidden="true" className="rsvp-botanical rsvp-botanical-tr" />
      <img src="/download%20(1).png" alt="" aria-hidden="true" className="rsvp-botanical rsvp-botanical-bl" />
      <div className="rsvp-card">
        <HeartIcon className="rsvp-heart" aria-hidden="true" />
        <p className="rsvp-eyebrow">We hope you can join us</p>
        <h2 id="rsvp-title">Kindly reply</h2>
        <GoldDivider className="rsvp-divider" />
        <p className="rsvp-description">Let us know if you’ll be celebrating with us.</p>
        <p className="rsvp-deadline">Please confirm your attendance on or before 30th November.</p>
        <div className="rsvp-form-area">
          <p className="rsvp-question">Will you be attending?</p>
          <div className="rsvp-choices">
            <button type="button" className={`rsvp-choice${attendance === 'attending' ? ' is-selected' : ''}`} aria-pressed={attendance === 'attending'} onClick={() => { setAttendance('attending'); setNotice(''); }}>
              <CheckIcon aria-hidden="true" /> Attending
            </button>
            <button type="button" className={`rsvp-choice${attendance === 'declining' ? ' is-selected' : ''}`} aria-pressed={attendance === 'declining'} onClick={() => { setAttendance('declining'); setNotice(''); }}>
              <XIcon aria-hidden="true" /> Unable to attend
            </button>
          </div>
          {attendance && (
            <form className="rsvp-fields" onSubmit={submitRsvp}>
              <label>
                Your name
                <input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
              </label>
              <label className="rsvp-wish-field">
                Make your wish
                <textarea value={wish} onChange={(event) => setWish(event.target.value)} placeholder="Write a wish for the couple (optional)" rows={3} />
              </label>
              <button type="submit" className="rsvp-send-button"><MessageCircleIcon aria-hidden="true" /> Continue to WhatsApp</button>
              {notice && <p className="rsvp-notice" role="status">{notice}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
