/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mid-grey": "#B1B8C6",
        "dark-grey": "#2D3648",
        primary: {
          50: "#fcf9f0",
          100: "#f7f1dd",
          200: "#eedfba",
          300: "#e0c280",
          400: "#d7ab60",
          500: "#ce9441",
          600: "#c07d36",
          700: "#a0632e",
          800: "#81502b",
          900: "#684326",
          950: "#382112",
        },
        secondary: {
          50: "#fdf3f3",
          100: "#fbe5e5",
          200: "#f9cfcf",
          300: "#f3aeae",
          400: "#ea7f7f",
          500: "#de5555",
          600: "#ca3838",
          700: "#aa2c2c",
          800: "#8c2828",
          900: "#752727",
          950: "#3f1010",
        },
        base: colors.stone,
      },
    },
  },
  daisyui: {
    themes: [
      {
        goldTheme: {
          primary: "#04060a",
          secondary: "#9A917B",
          accent: "#E0C280",
          lightgrey: "#B1B8C6",
          backgroundImage: {
            hero: "../public/heroBanner.png",
          },
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
};
