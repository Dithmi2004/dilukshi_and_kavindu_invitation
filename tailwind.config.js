export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF9F0',
        champagne: '#F3E9D7',
        sage: '#A8B8A0',
        eucalyptus: '#758B78',
        forest: {
          DEFAULT: '#344D3C',
          dark: '#273B2E',
        },
        gold: {
          DEFAULT: '#B69A62',
          deep: '#806A3A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        display: ['Cinzel', '"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(52,77,60,0.06), 0 24px 60px -24px rgba(52,77,60,0.28)',
        soft: '0 12px 32px -16px rgba(52,77,60,0.22)',
      },
    },
  },
  plugins: [],
};
