const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      colors: {
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
          50: "#fff1f1",
          100: "#ffe4e5",
          200: "#fecdd1",
          300: "#fea3aa",
          400: "#fc707d",
          500: "#f63d54",
          600: "#e41e40",
          700: "#c01033",
          800: "#a01131",
          900: "#891231",
          950: "#4d0416",
        },
        base: colors.stone,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
