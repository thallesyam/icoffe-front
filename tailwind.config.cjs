/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        bg: {
          white: '#FAFAFA',
        },
        yellow: {
          900: '#C47F17',
          500: '#DBAC2C',
          50: '#F1E9C9',
        },
        blue: {
          900: '#4B2995',
          500: '#8047f8',
          50: '#EBE5F9',
        },
        gray: {
          900: '#272221',
          800: '#403937',
          700: '#574f4d',
          300: '#D7D5D5',
          200: '#E3E5E5',
          100: '#EDEDED',
          50: '#F3F2F2',
        },
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
        cursive: 'Baloo 2, cursive',
      },
    },
  },
  plugins: [],
}
