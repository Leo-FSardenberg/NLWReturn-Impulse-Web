const { padding } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        Orange:{
          200: '#FC7F03'
        },
        brand: {
          300: '#996dff',
          500: '#8257e6',
        },
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    [require("@tailwindcss/aspect-ratio")],
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}