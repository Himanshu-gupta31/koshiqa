/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'yellow':'#ffd446',
        'green':'#36c17e',
        'grey':'#15130499',
        'cream':'#fcf8e7',
      }
    },
  },
  plugins: [],
}

