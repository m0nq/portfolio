/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
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
