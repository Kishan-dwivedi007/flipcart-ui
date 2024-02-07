/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      //for mobile
      sm: "360px",
      // => @media (min-width: 640px) { ... }

      // for laptop
      md: "768px",
      // => @media (min-width: 768px) { ... }

      // for small screen desktop
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      //for large screen desktop
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      color: {},
    },
  },
  plugins: [],
};
