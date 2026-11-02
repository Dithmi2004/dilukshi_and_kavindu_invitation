import type { WeddingConfig } from '../types/wedding';

/**
 * Central wedding configuration.
 * Update names, dates, venue, schedule, gallery and music here —
 * every section of the invitation reads from this file.
 */
export const wedding: WeddingConfig = {
  bride: {
    fullName: 'Dilukshi',
    firstName: 'Dilukshi',
    parents: 'Mr. Vidanapathirana & Mrs. Hatharasinha',
    relation: 'daughter'
  },
  groom: {
    fullName: 'Kavindu',
    firstName: 'Kavindu',
    parents: 'Mr. Vithanage & Mrs. Liyanage',
    relation: 'son'
  },
  monogram: 'DK',
  event: {
    dateLabel: 'Saturday, December 12, 2026',
    shortDateLabel: 'December 12, 2026',
    timeLabel: '8:00 AM – 3:00 PM',
    poruwaTimeLabel: '10:45 AM',
    startISO: '2026-12-12T08:00:00+05:30',
    endISO: '2026-12-12T15:00:00+05:30',
    timeZone: 'Asia/Colombo'
  },
  venue: {
    name: 'Canterbury Golf Resort',
    location: 'Kahathuduwa, Sri Lanka',
    mapsQuery: 'Canterbury Golf Resort, Kahathuduwa, Sri Lanka'
  },
  rsvp: {
    whatsappNumber: '+94764991398'
  },
  invitation: {
    coverOpening: 'Together with their beloved families',
    parentsRequest:
    'request the pleasure of your company at the wedding of their beloved',
    messageOpening: 'And so, our forever begins…',
    messageParagraphs: [
    'Two hearts united by love, two lives joined in a beautiful promise, and a lifetime of memories waiting to be made.',
    'We joyfully invite you to share in the celebration of our wedding.']

  },
  calendar: {
    title: 'Wedding of Dilukshi & Kavindu',
    description:
    'The wedding of Dilukshi Vidanapathirana & K.W. Kavindu Sampath.\nEvent: 8:00 AM – 3:00 PM\nPoruwa ceremony: 10:45 AM\nCanterbury Golf Resort, Kahathuduwa, Sri Lanka'
  },
  closing: {
    title: 'Thank you for being a part of our love story.',
    message:
    'Your presence and blessings will make our special day even more memorable.',
    signOff: 'With love,',
    signature: 'Dilukshi & Kavindu'
  },
  // Sample schedule — confirm timings with the couple before sending.
  schedule: [
  { time: '8:00 AM', title: 'Guest arrival' },
  { time: '9:30 AM', title: 'Welcome and preparations' },
  { time: '10:45 AM', title: 'Traditional Poruwa ceremony', highlight: true },
  { time: '12:00 PM', title: 'Photography and congratulations' },
  { time: '12:30 PM', title: 'Wedding reception' },
  { time: '1:00 PM', title: 'Lunch and celebrations' },
  { time: '3:00 PM', title: 'Conclusion of the event' }],

  // Add photos to public/images/gallery/ and set isPlaceholder to false.
  // Remove all entries to hide the gallery entirely.
  gallery: [
  { src: '/images/gallery/photo-01.jpg', alt: 'Engagement portrait', caption: 'Engagement portrait', aspect: 'portrait', isPlaceholder: true },
  { src: '/images/gallery/photo-02.jpg', alt: 'Pre-wedding shoot', caption: 'Pre-wedding shoot', aspect: 'landscape', isPlaceholder: true },
  { src: '/images/gallery/photo-03.jpg', alt: 'Together outdoors', caption: 'Together outdoors', aspect: 'landscape', isPlaceholder: true },
  { src: '/images/gallery/photo-04.jpg', alt: 'Candid moment', caption: 'Candid moment', aspect: 'portrait', isPlaceholder: true },
  { src: '/images/gallery/photo-05.jpg', alt: 'Engagement ceremony', caption: 'Engagement ceremony', aspect: 'landscape', isPlaceholder: true },
  { src: '/images/gallery/photo-06.jpg', alt: 'Golden hour', caption: 'Golden hour', aspect: 'landscape', isPlaceholder: true }],

  // Place a licensed / royalty-free instrumental at public/audio/wedding-background.mp3.
  // If the file is missing, the music control shows a disabled state.
  music: {
    enabled: true,
    src: '/audio/wedding-background.mp3',
    title: 'Romantic instrumental',
    volume: 0.45
  },
  images: {
    couple: {
      src: "/both.jpeg",
      alt: 'Illustration of a Sri Lankan bride in an Osariya saree and a groom in Kandyan Nilame attire, holding hands'
    },
    botanicalCorner: "/f2be5cae-8acf-4357-81cd-58973ea637b6.jpg",

    botanicalGarland: "/cba753fe-5e7e-4284-85fd-ee8ef4218149.jpg"

  }
};
