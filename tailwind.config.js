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
        "accent-black": "#0F172B",
        "nav-dropdown-black-text": "#1e2125",
        "black-cover-image":"#0f172be6"
      },
      boxShadow: {
        'custom': '0 0 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
