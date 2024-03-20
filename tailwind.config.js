/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins',
        dynalight:'Dynalight',

      },
      colors:{
        primary:'#a435f0',
        secondary:'#0c0c0d',

      }
    },
  },
  plugins: [],
}

