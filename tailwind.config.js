/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f1115',
        primary: '#f95f35',
        lightText: '#c5c5c5',
      },
      animation: {
        pulseSlow: 'pulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
