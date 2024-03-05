/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Arial': ['Helvetica','sans-serif']
    },
    boxShadow: {
      "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
}