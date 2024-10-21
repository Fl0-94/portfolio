/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'white': '#EEEEF0',
        'gray': '#B2B3BD',
        'violet': '#5FC2BA',
        'bg-page': '#130F19',
        'bg-nav': '#3B556D',
        'bg-card': '#1C1524',
        'bg-tech': '#747474',
        'border-colors': 'rgba(57, 58, 64, 0.50)',
        'shadow-nav': 'rgba(122, 63, 183, 0.10)',
        'green': '#37744E',
        'banner-purple': '#5FC2BA',
        'btn-purple': '#5FC2BA',
      },
      padding: {
        'marge': '5%'
      }
    },
  },
  plugins: [],
}