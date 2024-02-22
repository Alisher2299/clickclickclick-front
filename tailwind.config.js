/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      ...colors,
      bronze: {
        50: '#EDE0D9',
        100: '#D4B3A5',
        200: '#AE8C7E',
        300: '#A18072',
        400: '#6F5F58',
        500: '#5A4C47',
        600: '#493E3A',
        700: '#3B3330',
        800: '#302A27',
        900: '#262220',
        950: '#1C1917',
        999: '#141110',
      },
    }
  },
  plugins: [],
}

