/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#ffff00',
        primaryLow: '#ffff56',
        primaryLigth: '#ffff81',
        backgroundSecond: '#7f00b2',
        secondLigth: '#ab3ed8'
      }
    },
  },
  plugins: [],
}

