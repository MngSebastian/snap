/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium -gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)"
      },
    },
    fontFamily: {
      epilogue: ["Epilogue", "serif"],
    },
    content: {
      iconTodo: "url('./assets/icon-todo.svg')",
      
    },
    screens: {
      xs: "375px",
      md: "1440px",
     
    },
  },
  plugins: [],
}
