import React from 'react';

/** Stylised Sri Lankan lotus (pethum) emblem in fine gold line. */
export function LotusEmblem({ className = '' }: {className?: string;}) {
  return (
    <svg
      viewBox="0 0 64 42"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true">
      
      <path d="M32 5C26.5 13 26.5 23 32 32C37.5 23 37.5 13 32 5Z" />
      <path d="M32 11V28" strokeWidth={0.6} />
      <path d="M32 32C24.5 28.5 19 21 18.5 12.5C24.5 14.5 29.5 21 32 32Z" />
      <path d="M32 32C39.5 28.5 45 21 45.5 12.5C39.5 14.5 34.5 21 32 32Z" />
      <path d="M32 32C22 32.5 12.5 28.5 8 21C16 20 25.5 24.5 32 32Z" />
      <path d="M32 32C42 32.5 51.5 28.5 56 21C48 20 38.5 24.5 32 32Z" />
      <path d="M12 36.5H52" />
      <path d="M20 39.5H44" strokeWidth={0.6} />
      <circle cx="32" cy="36.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>);

}