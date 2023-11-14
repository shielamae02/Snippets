/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans"]
    },
    extend: {
      colors: {
        "primary": {
          "light": "#424874"
        },
        "secondary": {
          "light": "#A6B1E1"
        },
        "tertiary": {
          "light": "#DCD6F7"
        },
        "silver": {
          "light": "#F4EEF6"
        },
        "jetblack": {
          "light": "#2C3639"
        }
      }
    },
  },
  plugins: [],
}

