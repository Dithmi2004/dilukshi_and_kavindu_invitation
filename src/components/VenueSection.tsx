import React from 'react';
import { MapPinIcon, NavigationIcon } from 'lucide-react';
import { wedding } from '../data/wedding';
import { buildDirectionsUrl } from '../utils/links';
import { GoldDivider } from './ornaments/GoldDivider';
import { CalendarButton } from './CalendarButton';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.0076938082484!2d80.00947249977342!3d6.768914786455815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24d000df9784d%3A0x9f386731c01c41c9!2sCanterbury%20Golf%20Club!5e0!3m2!1sen!2slk!4v1793633557055!5m2!1sen!2slk';

export function VenueSection() {
  const { venue, event } = wedding;

  return (
    <section aria-labelledby="venue-title" className="venue-section">
      <div className="venue-frame" aria-hidden="true" />
      <div className="venue-flower venue-flower-tl" aria-hidden="true" />
      <div className="venue-flower venue-flower-br" aria-hidden="true" />
      <div className="venue-card">
        <div className="venue-copy">
          <span className="venue-icon-ring"><MapPinIcon aria-hidden="true" /></span>
          <p className="venue-eyebrow">Venue</p>
          <h2 id="venue-title">{venue.name}</h2>
          <p className="venue-location">{venue.location}</p>
          <GoldDivider className="venue-divider" />
          <p className="venue-date">{event.dateLabel}</p>
          <p className="venue-time">{event.timeLabel}</p>
          <div className="venue-actions">
            <a href={buildDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="venue-action-button">
              <NavigationIcon aria-hidden="true" /> Get Directions
              <span className="sr-only">(opens Google Maps in a new tab)</span>
            </a>
            <CalendarButton />
          </div>
        </div>
        <div className="venue-map-wrap">
          <iframe
            src={mapEmbedUrl}
            title={`Map showing ${venue.name}`}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
