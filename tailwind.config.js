/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)"
      },
      
    },
    fontFamily: {
      epilogue: ["Epilogue", "serif"],
    },
    content: {
      logo: "url('./assets/images/logo.svg')",
      heroMobile: "url('./assets/images/image-hero-mobile.svg')",
      arrowDown: "url('./assets/images/icon-arrow-down.svg')",
      arrowUp: "url('./assets/images/icon-arrow-up.svg')",
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
