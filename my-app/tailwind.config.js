/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Recursive', 'sans-serif']
      },
      colors: {
        'dark-gray-1': '#242424',
        'dark-gray-2': '#1A1A1A',
      }
    },
  },
  plugins: [],
}

