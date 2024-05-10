/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'Montserrat', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'dark-background-color': 'var(--dark-background-color)',
        'primary': 'hotpink',
        'secondary': 'dodgerblue'
      }
    }
  },
  plugins: []
};
