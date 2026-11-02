import { wedding } from '../data/wedding';

/** Converts "2026-12-12T08:00:00+05:30" → "20261212T080000" (local wall time). */
function toCalendarStamp(iso: string): string {
  return iso.slice(0, 19).replace(/[-:]/g, '');
}

export function buildGoogleCalendarUrl(): string {
  const { event, venue, calendar } = wedding;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: calendar.title,
    dates: `${toCalendarStamp(event.startISO)}/${toCalendarStamp(event.endISO)}`,
    ctz: event.timeZone,
    location: `${venue.name}, ${venue.location}`,
    details: calendar.description
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildDirectionsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    wedding.venue.mapsQuery
  )}`;
}