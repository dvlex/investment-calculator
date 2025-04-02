/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}', '*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      secondary: '#F4F2ED',
      black: 'black',
      white: 'white'
    },
    fontFamily: {
      'pt-serif': ['PT Serif', 'serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
