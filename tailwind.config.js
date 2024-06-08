/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      primary: '#201A23',
      secondary: '#9E4770',
      third: '#fbfbfb',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}