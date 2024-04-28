/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        bottom_fade: {
          '0%': { opacity: 0, transform: 'translate(0px, 20px)' },
          '100%': { opacity: 1, transform: 'translate(0px, 0px)' },
        }
      },
      fontFamily: {
        pacifico: '"Pacifico", cursive'
      },
      animation: {
        bottom_fade: 'bottom_fade 0.3s ease-in-out ',
      }
    },
  },
  plugins: [],
};
