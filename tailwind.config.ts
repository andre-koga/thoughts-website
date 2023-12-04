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
        dark: "#1a202c",
        darky: "#1a202c",
        mid: "#1a202c",
        lighty: "#1a202c",
        light: "#1a202c",
      },
    },
  },
  plugins: [],
};
export default config;
