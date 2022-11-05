/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jj1: "#006888",
        jj2: "#888888",
        jj3: "#777777"
      },
      fontFamily: {
        'melody': ['Hi Melody', 'cursive']
      }
    },
  },
  plugins: [],
}
