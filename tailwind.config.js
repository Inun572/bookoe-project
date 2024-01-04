/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#8170F2',
        hero: '#F1F0FE',
        rating: '#FDAF17',
        'dark-gray': '#757575',
        'light-gray': '#a4a4a4',
      },
    },
  },
  plugins: [],
};
