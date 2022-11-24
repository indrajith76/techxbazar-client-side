/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff6117",
          secondary: "#978def",
          accent: "#75777e",
          neutral: "#2D2438",
          "base-100": "#fff",
          info: "#8B9AE5",
          success: "#2EB881",
          warning: "#D0A116",
          error: "#EF3E3E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
