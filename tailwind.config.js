/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '26px'],
      xl: ['32px', '36px'],
      '2xl': ['48px', '52px'],
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