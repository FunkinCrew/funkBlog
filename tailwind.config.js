/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
           50: "#fee6f4",
          100: "#fdcee9",
          200: "#fcb5df",
          300: "#fb9dd4",
          350: "#fb84c9",
          400: "#fa6bbe",
          450: "#f953b4",
          500: "#f839a8", // from logo
          550: "#e6319a",
          600: "#cc1982",
        },
        blue: {
          500: "#333ebd",
        },
        gray: {
           50: "#f1f2f4", // 10%, 95%
          100: "#c7cad1", // 10%, 80%
          200: "#9da3af", // 10%, 65%
          300: "#7e889a", // 12%, 55%
          400: "#636d83", // 14%, 45%
          500: "#4b5468", // 16%, 35%
          600: "#3f485a", // 18%, 30%
          700: "#333b4d", // 20%, 25%
          800: "#282f3e", // 22%, 20%
          900: "#1d232f", // 24%, 15%
          920: "#171c27", // 26%, 12%
          950: "#131720", // 26%, 10%
          970: "#0d1017", // 28%, 7%
          980: "#090c10", // 28%, 5%
        }
      }
    },
  },
  content: [
    "./templates/**/*.html",
    "./content/**/*.md"
  ],
  plugins: [
    require('@tailwindcss/typography'),
    iconsPlugin({
      collections: getIconCollections(["mdi"]),
    }),
  ],
}

