/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        customOrange: "#D14305",
        whiteLight: "#e5e6e7",
      },
    },
  },
  plugins: [],
};
