/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "page-bg": "#111315",
      "panel-bg": "#1B1D1F",
      "secondary-text": "#6F757C",
      "price-bg": "#BEE3CC",
      "main-text": "#FEF7EE",
      "popular-bg": "#F6C768",
      "sold-out": "#ED735D",
    },
    fontSize: {
      heading: "2rem",
      body: "1rem",
      label: "0.875rem",
      small: "0.625rem",
      price: "0.75rem",
    },
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "coffee-bg": "url('./src/assets/bg-cafe.jpg')",
        "heading-bg": "url('./src/assets/vector.svg')",
      },
    },
  },
  plugins: [],
};
