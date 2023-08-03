/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-moto': 'linear-gradient(180deg, rgba(32, 32, 32, 0.00) 0%, #202020 100%)',
        'gradient-moto-vertical': 'linear-gradient(90deg, rgba(32, 32, 32, 0.00) 0%, #202020 100%)',
        'promo-motorcycle': "url('/src/asserts/first-bike.png')",
        'custom-lightgray': 'lightgray 50% / cover no-repeat'
      },
      backgroundClip: {
        'text': 'text',
      },
      textFillColor: {
        'transparent': 'transparent',
      },
    },
  },
  plugins: [],
}

