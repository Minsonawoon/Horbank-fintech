/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ['Alexandria'],
        'roboto-flex': ['Roboto-flex']
      }
    },
  },
  plugins: [],
}

