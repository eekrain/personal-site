/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
// const form = require("@tailwindcss/forms");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      screens: {
        sm: "350px",
        md: "576px",
        lg: "768px",
        xl: "992px",
      },
      colors: {
        body: "#fafafa",
        title: "#333",
        normalTextColor: "#757575",
      },
      boxShadow: {
        menu: "0 -1px 4px rgb(0 0 0 / 0.15)",
        innerProfileXL: "inset 0 0 0 9px rgb(255 255 255 / 60%)",
        innerProfileLG: "inset 0 0 0 8px rgb(255 255 255 / 60%)",
        innerProfileMD: "inset 0 0 0 6px rgb(255 255 255 / 60%)",
      },
      maxWidth: {
        lg968: "968px",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        profile_animate: "profile_animate 8s ease-in-out infinite 1s",
        scroll: "scroll 2s ease infinite",
      },
      keyframes: {
        profile_animate: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(3.75rem)",
          },
        },
      },
    },
  },
  plugins: [
    // form,
    plugin(function ({ addComponents }) {
      addComponents({
        ".home__subtitle": {
          position: "relative",
          // paddingLeft: "80px",
          "&:before": {
            content: '""',
            position: "absolute",
            // width: "70px",
            height: "1px",
            backgroundColor: "#757575",
            left: 0,
            top: "1rem",
          },
        },
      });
    }),
  ],
};
