/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        primary: ["Bebas Neue", "sans-serif"],
      },
      spacing: {
        60: "60px",
      },
      colors: {
        primary: "#C7C7C7",
        secondary: "#D3E97A",
        black: "#000000",
        "custom-border": "#000000",
        "primary-border": "#D3E97A",
        "secondary-border": "#484848",
      },
      backgroundColor: {
        primary: "#000000",
        secondary: "#484848",
        dark_primary: "#D3E97A",
        light_primary: "rgba(211, 233, 122, 0.9)",
        projectColor: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
