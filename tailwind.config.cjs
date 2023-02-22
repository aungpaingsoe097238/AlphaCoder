/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2d3748",
        "light-gray": "#edf2f7"
      }
    }
  },
  plugins: []
};
