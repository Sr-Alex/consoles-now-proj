/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "proj-white": "#F5F5F5",
        "proj-black": "#292929",
        "proj-lightGray": "#DCDCDC",
        "proj-darkGray": "#525252",
        "proj-orange": "#FCBB15",
        "proj-purple": "#661465",
      },
      fontFamily: {
        Jura: ["Jura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
