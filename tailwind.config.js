/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      spacing: {
        128: "34rem",
      },
    },

    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      alata: ['Alata'],
    }

  },
  plugins: [],
};
