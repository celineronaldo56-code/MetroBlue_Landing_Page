/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#1A3C6E',
        secondary: '#0F9BD7',
        dark:      '#0D1B2A',
        light:     '#F0F7FF',
        grey:      '#64748B',
        border:    '#E2E8F0',
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
