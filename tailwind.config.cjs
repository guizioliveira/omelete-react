/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    container: {
      screens: {
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
      },
      keyframes: {
        "hamburger-menu-first-line-on": {
          "0%": { transform: "translate(-50%,-300%)" },
          "30%": { transform: "translate(-50%,-50%)" },
          "100%": { transform: "translate(-50%,-50%) rotate(-45deg)" }
        },
        "hamburger-menu-first-line-off": {
          "0%": { transform: "translate(-50%, -50%) rotate(-45deg)" },
          "30%": { transform: "translate(-50%, -50%) rotate(0)" },
          "100%": { transform: "translate(-50%, -300%)" }
        },
        "hamburger-menu-second-line-on": {
          "0%": { transform: "translate(-50%, -50%)", opacity: 1 },
          "100%": { transform: "translate(-50%, -50%)", opacity: 0 }
        },
        "hamburger-menu-second-line-off": {
          "0%": { transform: "translate(-50%, -50%)", opacity: 0 },
          "100%": { transform: "translate(-50%, -50%)", opacity: 1 }
        },
        "hamburger-menu-third-line-on": {
          "0%": { transform: "translate(-50%, 200%)" },
          "30%": { transform: "translate(-50%, -50%)" },
          "100%": { transform: "translate(-50%, -50%) rotate(45deg)" }
        },
        "hamburger-menu-third-line-off": {
          "0%": { transform: "translate(-50%, -50%) rotate(45deg)" },
          "30%": { transform: "translate(-50%, -50%) rotate(0)" },
          "100%": { transform: "translate(-50%, 200%)" }
        }
      },
      animation: {
        "menu-first-line-on":
          "0.5s ease-in-out forwards hamburger-menu-first-line-on",
        "menu-first-line-off":
          "0.5s ease-in-out forwards hamburger-menu-first-line-off",
        "menu-second-line-on":
          "0.5s ease-in-out forwards hamburger-menu-second-line-on",
        "menu-second-line-off":
          "0.5s ease-in-out forwards hamburger-menu-second-line-off",
        "menu-third-line-on":
          "0.5s ease-in-out forwards hamburger-menu-third-line-on",
        "menu-third-line-off":
          "0.5s ease-in-out forwards hamburger-menu-third-line-off"
      }
    }
  },
  plugins: []
};
