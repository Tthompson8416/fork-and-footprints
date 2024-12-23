export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-accent': '#707755',
      },
      animation: {
        'pop-in': 'popIn 0.5s ease-out',
      },
      keyframes: {
        popIn: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      screens: {
        '3xl': '1536px', 
        xs: '0px',
    },
  },
},
  plugins: [],
};
