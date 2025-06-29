/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bbe5cd',
          300: '#8dd1a8',
          400: '#56b67b',
          500: '#329957',
          600: '#237a43',
          700: '#1d6237',
          800: '#1a4f2e',
          900: '#164127',
        },
        secondary: {
          50: '#fdf4f3',
          100: '#fde8e4',
          200: '#fbd5cd',
          300: '#f7b8a8',
          400: '#f18f75',
          500: '#e66948',
          600: '#d25030',
          700: '#b04125',
          800: '#913924',
          900: '#783424',
        },
        coconut: {
          50: '#fefdf9',
          100: '#fefbf0',
          200: '#fcf4d9',
          300: '#f9e9b8',
          400: '#f4d888',
          500: '#edc55f',
          600: '#d9a441',
          700: '#b8853a',
          800: '#956a37',
          900: '#795631',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};