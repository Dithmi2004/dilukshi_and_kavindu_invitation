import React from 'react';

interface GoldDividerProps {
  className?: string;
  align?: 'center' | 'start-md';
  tone?: 'gold' | 'light';
}

export function GoldDivider({
  className = '',
  align = 'center',
  tone = 'gold'
}: GoldDividerProps) {
  const line = tone === 'gold' ? 'bg-gold/60' : 'bg-gold/50';
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-3 text-gold ${
      align === 'center' ? 'justify-center' : 'justify-center md:justify-start'} ${
      className}`}>
      
      <span className={`h-px w-14 sm:w-20 ${line}`} />
      <svg viewBox="0 0 44 12" className="h-3 w-11" fill="none" stroke="currentColor" strokeWidth={1}>
        <circle cx="5" cy="6" r="1.3" fill="currentColor" stroke="none" />
        <path d="M14 6H17" />
        <path d="M22 1L27 6L22 11L17 6Z" />
        <path d="M22 4L24 6L22 8L20 6Z" fill="currentColor" stroke="none" />
        <path d="M27 6H30" />
        <circle cx="39" cy="6" r="1.3" fill="currentColor" stroke="none" />
      </svg>
      <span className={`h-px w-14 sm:w-20 ${line}`} />
    </div>);

}