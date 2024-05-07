/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
],
  theme: {
    extend: {
      colors: {
        colorTituloPrincipal: '#77B978', 
        colorDominica: '#FCAF3B',
      },
      fontFamily:{
        "principal":['ui-sans-serif', 'system-ui']
      },
      screens: {
        'big-lg': '1600px',
      },
    },
  },
  plugins: [],
}

