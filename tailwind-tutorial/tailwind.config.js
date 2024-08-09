/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "popi": "Poppins",
      },

      height: {
        '30': '120px',
      }
    },
  },
  plugins: [],
}

