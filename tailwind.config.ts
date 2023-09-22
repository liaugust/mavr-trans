/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#EBB200",
        dark2: "#343331",
        dark: "#4E3D09",
        gray: "#716F6B",
      },
      fontFamily: {
        sans: ["var(--font-gotham)"],
      },
    },
  },
  plugins: [],
};
