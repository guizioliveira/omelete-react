/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1220px"
      }
    },
    extend: {
      fontFamily: {
        uni: ["uni", "sans-serif"],
        "uni-book": ["uni-book", "sans-serif"]
      },
      colors: {
        primary: "#FFBF00"
      }
    }
  },
  plugins: []
};
