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
      },
      animation: {
        'appear-in' : '0.5s ease-out 1 appearIn',
        'appear-out' : '0.5s ease-out 1s 1 appearOut'
      },
      keyframes: {
        appearIn: {
          '0%' : { opacity: '0' },
          '50%' : { opacity: '0.5'},
          '100%' : { opacity: '1' }
        },
        appearOut: {
          '0%' : { opacity: '1'},
          '50%' : { opacity: '0.5'},
          '100%' : { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}

