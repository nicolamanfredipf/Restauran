/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        nunito: ['Nunito','sans-serif'],
        pacifico: ["Pacifico", 'cursive']
      },
      colors: {
        "accent-white": "#F1F8FF",
        "accent-orange": "#FEA116",
        "accent-black": "#0F172B"
      }
    },
  },
  plugins: [],
}
