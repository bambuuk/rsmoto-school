/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-moto': 'linear-gradient(180deg, rgba(32, 32, 32, 0.00) 0%, #202020 100%)',
        'gradient-moto-vertical': 'linear-gradient(90deg, rgba(32, 32, 32, 0.00) 0%, #202020 100%)',
        'promo-motorcycle': "url('/src/asserts/first-bike.png')",
        'contacts-motorcycle': "url('/src/asserts/contacts-bg-motorcycle.png')",
        'custom-lightgray': 'lightgray 50% / cover no-repeat'
      }),
      backgroundClip: {
        'text': 'text',
      },
      textFillColor: {
        'transparent': 'transparent',
      },
      color: {
        'modalBg': 'rgb(0, 0, 0)'
      }
    },
  },
  plugins: [],
}

