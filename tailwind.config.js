/** @type {import('tailwindcss').Config} */

const withTM = require('next-transpile-modules')(["@material-tailwind/react"]); 

module.exports = withTM({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

