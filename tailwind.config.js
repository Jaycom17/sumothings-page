/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
],
  theme: {
    extend: {
      screens: {medio: '920px', grande: '1200px', 'big-lg': '1600px'},
    },
  },
  plugins: [],
}

