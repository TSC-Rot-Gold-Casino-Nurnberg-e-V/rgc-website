/** @type {import('tailwindcss').Config} */
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
