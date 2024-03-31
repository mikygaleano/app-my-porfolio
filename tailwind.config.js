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
      },
      keyframes: {
        punter: {
          '0%': { display: 'none' },
          '50%': { display: 'flex', opacity: 0.5 },
          '100%': { visibility: 'visible' },
        },
        backgroundGradientKeyframes: {
          '0%': { backgroundColor: '#ffff00' },
          '50%': { backgroundColor: '#7f00b2' },
          '100%': { backgroundColor: '#ffff81' },
        },
      },
      animation: {
        punter: 'punter 1s ease-in-out infinite',
        backgroundGradientAnimation: 'backgroundGradientKeyframes 3s linear infinite',
      },
    },
    fontFamily: {
      display: ['Oswald', 'sans-serif']
    },
  },
  plugins: [],
}
