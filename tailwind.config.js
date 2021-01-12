module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7B77B8',
        },
        violet: {
          DEFAULT: '#bd9dea',
        },
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
