/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Roboto", "sans - serif"],
      },
      colors: {
        primaryColor: "#16181C",
        lightText: "#878e99",
        designColor: "#ff014f",
        titleColor: "#c4cfde",
        test: "linear-gradient(145deg, #1e2024, #23272b)",
      },
      backgroundImage: {
        "hero-image": "url('./banner.jpg')",
      },
    },
  },
  plugins: [],
};
