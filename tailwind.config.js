/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const MAIN_COLOR = 'red'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      mainColor: colors[MAIN_COLOR],
    },
    extend: {},
  },
  plugins: [],
}
