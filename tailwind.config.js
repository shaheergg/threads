/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#101010",
        content: "#f3f5f7",
        accent: "#181818",
      },
    },
  },
  plugins: [],
};
