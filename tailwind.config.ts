import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f5f5f0",
          100: "#e8e8d8",
          200: "#d1d1b8",
          300: "#b3b390",
          400: "#96966f",
          500: "#7a7a57",
          600: "#5f5f44",
          700: "#4a4a36",
          800: "#3d3d2e",
          900: "#353528",
          950: "#1c1c14",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdfaf5",
          200: "#faf4e8",
          300: "#f5ead3",
          400: "#eed9b5",
          500: "#e4c392",
          600: "#d4a86f",
          700: "#c08f4f",
          800: "#9f7442",
          900: "#826139",
          950: "#45301c",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
