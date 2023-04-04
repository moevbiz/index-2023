/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '26px'],
      xl: ['24px', '32px'],
      '2xl': ['48px', '56px'],
    },
    fontFamily: {
      sans: 'Arial, sans-serif',
      apfel: '"Apfel Grotezk", sans-serif',
    },
    extend: {
      colors: {
        red: 'red',
      }
    },
  },
  plugins: [],
}