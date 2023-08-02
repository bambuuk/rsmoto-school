/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 88.02%)',
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

