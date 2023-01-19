/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        body: "#fafafa",
        title: "#666",
      },
      boxShadow: {
        menu: "0 -1px 4px rgb(0 0 0 / 0.15)",
      },
      maxWidth: {
        lg768: "768px",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
