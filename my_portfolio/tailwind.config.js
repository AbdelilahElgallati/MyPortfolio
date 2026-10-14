/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900-rgb) / <alpha-value>)',
        },
        teal: {
          50: 'rgb(var(--color-teal-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-teal-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-teal-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-teal-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-teal-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-teal-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-teal-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-teal-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-teal-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-teal-900-rgb) / <alpha-value>)',
        },
        accent: {
          50: 'rgb(var(--color-accent-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-accent-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-accent-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-accent-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-accent-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-accent-900-rgb) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};