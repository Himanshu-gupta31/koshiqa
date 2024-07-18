/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#ffd446',
        'green': '#36c17e',
        'grey': '#15130499',
        'cream': '#fcf8e7',
        'dark-green': '#004931',
        'dark-blue': '#181F4B',
        'button-green':'#0E986A'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #FAAA06 0%, #F9D791 50%, #FAAA06 100%)',
      },
    },
  },
  plugins: [],
}
