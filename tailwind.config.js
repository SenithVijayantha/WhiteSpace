 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#043873",
        "primary-light-blue": "#4F9CF9",
        "secondary-yellow": "#FFE492",
        "secondary-blue": "#A7CEFC",
        "secondary-white": "#FFFFFF",
        "secondary-black": "#212529"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}