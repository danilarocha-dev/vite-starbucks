/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //Mapeia as font Poppins para Tailwind CSS
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        'neutral-0': '#FFFFFF',
        'neutral-1': '#eee4db',
        'neutral-2': '#d4c3b6',
        'neutral-3': '#b8a99e',
        'neutral-4': '#9e8f85',
        'neutral-5': '#7e6e65',
        'neutral-6': '#5e4e45',
        'neutral-7': '#3e2e25',
        'neutral-8': '#1e0e05',
        'neutral-9': '#000000',
        'primary-1': '#34815d',
        'primary-2': '#2c6e4f',
        'primary-3': '#245c42',
        'secondary-1': '#f5c518',
      }
    },
  },
  plugins: [],
}
