module.exports = {

   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{blue:{460:"#44b2e5"}}
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
