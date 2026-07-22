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
        ink: '#0C0C0C',
        paper: '#FFFFFF',
        graphite: '#6B6E73',
        accent: '#0C0C0C',
        'accent-hover': '#333333',
        'tile-dark': '#0C0C0C',
        'tile-darker': '#1A1A1A',
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
        DEFAULT: 'rgba(12, 12, 12, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};