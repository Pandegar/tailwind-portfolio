/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#fdba74',
        secondary: '#0f172a',
        dark: '#0f172a',
      },
      sreens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

