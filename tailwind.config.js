/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {

          primary: "#FFF8F5",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      {
        dark: {

          primary: "#3ABFF8",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#FFF8F5",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
