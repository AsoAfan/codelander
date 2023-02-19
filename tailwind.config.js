/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "#303669",
        icon: "#a4c4f3",
      },

      transitionTimingFunction: {
        none: "none",
      },

      borderRadius: {
        half: "50%",
        shape: "50px",
      },

      height: {
        svg: "1.42rem",
      },

      width: {
        svg: "1.42rem",
      },

      boxShadow: {
        shape: "0 3px 47px rgba(0 0 0 / 0.15)",
      },

      gap: {
        15: "3.75rem",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
