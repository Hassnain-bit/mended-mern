const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "6rem",
      },
      screens: {
        xs: "465px",
        sm: "640px",
        md: "808px",
        lg: "1124px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        driping: "a dripping marker",
      },
      colors: {
        "true-gray": colors.neutral,
        primary: "#61ADAD",
        secondary: "#FF6E05",
        tertiary: "#FFEB72",
      },
      fontSize: {
        headline: "80px",
        heading: "48px",
        headingOne: "24px",
        headingTwo: "20px",
        headingThree: "14px",
      },
      boxShadow: {
        // btn: "0px 14px 48px rgba(42, 58, 70, 0.2",
        // x2: " 0px 0.588011px 4.11608px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
