/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    fontFamily: {
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'text-color': 'var(--text-color)',
        'dark-background-color': 'var(--dark-background-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)'
      }
    }
  },
  plugins: []
};
