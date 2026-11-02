export interface FamilyMember {
  fullName: string;
  firstName: string;
  parents: string;
  relation: 'daughter' | 'son';
}

export interface EventDetails {
  dateLabel: string;
  shortDateLabel: string;
  timeLabel: string;
  poruwaTimeLabel: string;
  /** ISO 8601 with Sri Lanka offset, e.g. 2026-12-12T08:00:00+05:30 */
  startISO: string;
  endISO: string;
  timeZone: string;
}

export interface VenueDetails {
  name: string;
  location: string;
  mapsQuery: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  highlight?: boolean;
}

export interface GalleryPhoto {
  /** Path relative to /public, e.g. /images/gallery/photo-01.jpg */
  src: string;
  alt: string;
  caption: string;
  aspect: 'portrait' | 'landscape';
  /** When true, a labelled sample placeholder is shown instead of the image */
  isPlaceholder?: boolean;
}

export interface MusicConfig {
  enabled: boolean;
  /** Path relative to /public */
  src: string;
  title: string;
  volume: number;
}

export interface IllustrationAsset {
  src: string;
  alt: string;
}

export interface WeddingConfig {
  bride: FamilyMember;
  groom: FamilyMember;
  monogram: string;
  event: EventDetails;
  venue: VenueDetails;
  rsvp: {
    /** WhatsApp number with country code; formatting characters are allowed. */
    whatsappNumber: string;
  };
  invitation: {
    coverOpening: string;
    parentsRequest: string;
    messageOpening: string;
    messageParagraphs: string[];
  };
  calendar: {
    title: string;
    description: string;
  };
  closing: {
    title: string;
    message: string;
    signOff: string;
    signature: string;
  };
  schedule: ScheduleItem[];
  gallery: GalleryPhoto[];
  music: MusicConfig;
  images: {
    couple: IllustrationAsset;
    botanicalCorner: string;
    botanicalGarland: string;
  };
}
