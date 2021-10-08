module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'shadow-black': '#121212',
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        'full': '100vh',
       },
       maxHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        'full': 'calc(100vh - 72px)',
       }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
}
