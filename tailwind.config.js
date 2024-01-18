/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gstats1: '#7c7e9f',
        gstats2: '#6fc5eb',
        gstats3: '#7bcb75',
        primary: '#56bce4',
      },
      backgroundColor: {
        'dark-gray': '#1a202c',
      },
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
