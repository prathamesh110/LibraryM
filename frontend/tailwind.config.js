/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        h1 : ['Aladin', 'cursive'],
        body : ['Alegreya Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
