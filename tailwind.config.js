/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./no-auth.html", "./mines.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"],
      },
      width: {
        "432": "432px",
      },
      height: {
        "432": "432px",
      },
    },
  },
  plugins: [],
}
