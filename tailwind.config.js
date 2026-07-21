/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        paper: '#FAFAF9',
        graphite: '#6B6E73',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        'tile-dark': '#121212',
        'tile-darker': '#1C1C1E',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
      },
      letterSpacing: {
        widest2: '0.18em',
      },
      borderColor: {
        DEFAULT: 'rgba(107, 110, 115, 0.25)',
      },
    },
  },
  plugins: [],
};