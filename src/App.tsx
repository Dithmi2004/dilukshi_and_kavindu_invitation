import React from 'react';
import { MusicProvider } from './contexts/MusicContext';
import { Invitation } from './pages/Invitation';

export function App() {
  return (
    <MusicProvider>
      <Invitation />
    </MusicProvider>);

}