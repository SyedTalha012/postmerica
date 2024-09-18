/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orangeColor:"#FF6600",
        blueColor:"#0A1B3C"
      }
    },
  },
  plugins: [],
}