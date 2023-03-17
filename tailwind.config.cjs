/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        main: "#ff385c",
      },
      screens: {
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
};
