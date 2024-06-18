/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode
        "darkestBlue-dark": "#1E1F26",
        "background-blue-dark": "#283655",
        "blueberry-dark": "#4D648D",
        "skyBlue-dark": "#D0E1F9",
        // Light mode
        "background-lightGray": "#F1F1F2",
        "grayishCyan-light": "#F5FDFC",
        "glacierBlue-light": "#1995AD",
        "iceColor-light": "#A1D6E2",
        "warmGrayText-light": "#BCBABE",
        "darkGrayText-light": "#444444",
      }
    },
  },
  plugins: [],
}

