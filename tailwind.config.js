/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1db954",
        active: "#282828",
        link: "#b3b3b3",
        footer: "#181818",
      },
      boxShadow: {
        spotify:'0 2px 4px 0 rgb(0 0 0 / 20%)'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
