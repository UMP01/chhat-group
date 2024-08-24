/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveline: {
          '0%': { height: 0 },
          '100%': { height: '100%' },
        },
      },
      animation: {
        moveline: 'moveline 6s linear forwards',
      },
      
    },
  },
  plugins: [],
};
