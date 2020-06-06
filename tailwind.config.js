const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { 
    content: [
    './src/**/*.tsx'
    ]
  },
  theme: {
    colors: {
      primary: '#f36f21',
      black: colors.black,
      gray: colors.gray,
      white: colors.white
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
