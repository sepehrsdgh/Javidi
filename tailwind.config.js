/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        iranBold: "IRANVazirWebFaBold",
        iranBlack: "IRANVazirWebFaBlack",
        iranUltraLight: "IRANVazirWebFaLight",
        iranMedium: "IRANVazirWebMedium",
        iranRegular: "IRANVazirWebRegular",
        iranLight: "IRANVazirWebThin",
      },
    },
  },
  plugins: [],
};
