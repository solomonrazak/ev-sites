const {heroui} = require('@heroui/theme');
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(input|form).js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main-dark-bg": "#333333",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(),heroui()]}

