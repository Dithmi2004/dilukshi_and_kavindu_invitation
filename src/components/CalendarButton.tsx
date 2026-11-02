import React from 'react';
import { CalendarPlusIcon } from 'lucide-react';
import { buildGoogleCalendarUrl } from '../utils/links';

export function CalendarButton() {
  return (
    <a
      href={buildGoogleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-gold bg-ivory px-7 py-3.5 font-display text-[11px] uppercase tracking-[0.22em] text-forest outline-none transition-[background-color,transform] duration-150 hover:bg-champagne focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory active:scale-[0.98]">
      
      <CalendarPlusIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      Add to Google Calendar
      <span className="sr-only">(opens in a new tab)</span>
    </a>);

}