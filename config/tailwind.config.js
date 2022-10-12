/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}",
            "./views/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  },
  require("daisyui")],
}
