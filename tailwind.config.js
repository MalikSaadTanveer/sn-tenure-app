/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['cera-pro', ...defaultTheme.fontFamily.sans],
        'sans-bold' : ['cera-pro-bold', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
