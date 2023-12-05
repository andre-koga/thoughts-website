import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#36454F",
        darky: "#5C768E",
        mid: "#8C9AA4",
        lighty: "#B4C1CC",
        light: "#E8F0F5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
