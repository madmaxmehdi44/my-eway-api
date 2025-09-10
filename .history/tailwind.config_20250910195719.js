/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'bounce-in': 'bounceIn 1s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '60%': { transform: 'scale(1.05)', opacity: 1 },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}