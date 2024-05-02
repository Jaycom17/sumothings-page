/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
],
  theme: {
    extend: {
      screens: {
        'big-lg': '1600px',
      },
    },
  },
  plugins: [],
}

