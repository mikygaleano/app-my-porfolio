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
          '0%': { displey: 'hidden' },
          '50%': {displey: 'flex', opasity: 5},
          '100%': { visibility: 'visible' },
        },
      animation: {
        punter: 'punter 1s ease-in-out infinite'
      }
    },
    fontFamily: {
      fontFamily: {
        'display':['Oswald, sans-serif']
      },
    },
    screens: {
      'xs': '318px',
    },
  },
  plugins: [],
}
}
