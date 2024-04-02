/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "767px" },
      md: { min: "768px", max: "991px" },
      lg: { min: "992px", max: "1199px" },
      xl: { min: "1200px" },
    },
    safelist: [
      "animate-[slide-right_1s_ease-in-out]",
      "animate-[fade-in-down_1s_ease-in-out]",
    ],
  },
  plugins: [],
};
