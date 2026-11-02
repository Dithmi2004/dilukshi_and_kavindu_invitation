import React from 'react';
import { CalendarHeartIcon, ClockIcon, Flower2Icon, LandmarkIcon, MapPinIcon, type LucideIcon } from 'lucide-react';
import { wedding } from '../data/wedding';
import { LotusEmblem } from './ornaments/LotusEmblem';
import { GoldDivider } from './ornaments/GoldDivider';

interface Detail {
  label: string;
  value: string;
  icon: LucideIcon;
}

function IconRing({ icon: Icon, large = false }: { icon: LucideIcon; large?: boolean }) {
  return (
    <span className={`details-icon-ring${large ? ' details-icon-ring-large' : ''}`}>
      <Icon aria-hidden="true" strokeWidth={1.35} />
    </span>
  );
}

export function WeddingDetails() {
  const { event, venue } = wedding;
  const details: Detail[] = [
    { label: 'Event Time', value: event.timeLabel, icon: ClockIcon },
    { label: 'Poruwa Ceremony', value: event.poruwaTimeLabel, icon: Flower2Icon },
    { label: 'Venue', value: venue.name, icon: LandmarkIcon },
    { label: 'Location', value: venue.location, icon: MapPinIcon }
  ];

  return (
    <section aria-labelledby="details-title" className="wedding-details-section">
      <div className="wedding-details-frame" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="details-flower-corner details-flower-tl" aria-hidden="true" />
      <div className="details-flower-corner details-flower-tr" aria-hidden="true" />
      <div className="details-flower-corner details-flower-bl" aria-hidden="true" />
      <div className="details-flower-corner details-flower-br" aria-hidden="true" />

      <div className="wedding-details-content">
        <div className="details-heading">
          <LotusEmblem className="details-lotus" />
          <h2 id="details-title">Wedding Details</h2>
          <GoldDivider className="details-divider" />
        </div>

        <div className="details-date-block">
          <IconRing icon={CalendarHeartIcon} large />
          <p className="details-date-label">Wedding Date</p>
          <p className="details-date">{event.dateLabel}</p>
        </div>

        <dl className="details-grid">
          {details.map(({ label, value, icon }) => (
            <div key={label} className="details-card">
              <IconRing icon={icon} />
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
