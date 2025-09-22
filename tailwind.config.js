/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        futura: ['FuturaCyrillicBold', 'sans-serif'],
        romana: ['Romana', 'serif'],
        Fontspring: ['Fontspring-DEMO-lupio', 'sans-serif'],
        ubuntu: ['Ubuntu'],
        poppins: ['Poppins'],
        roboto: ['Roboto']
      },
    },
  },
  plugins: []
}