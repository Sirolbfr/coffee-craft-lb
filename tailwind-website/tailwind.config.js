module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,css}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        fredoka: ['Fredoka'],
      },
    },
  },
  plugins: [],
}