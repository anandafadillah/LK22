/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily:{
      poppins : 'Poppins',
    },
    container :{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#F6F1E9',
        font: '#4F200D',
        secondary: '#FFD93D',
        bar: '#FF8400',

      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

