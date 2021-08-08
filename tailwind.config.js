module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          primary: '#2026D2',
          darkGray: '#3e4c59',
          gray: '#7B8794'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
