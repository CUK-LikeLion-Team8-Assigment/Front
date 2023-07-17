/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-color": "rgba(223, 190, 106, 0.7)",
        "hover-color": "#718093",
      },
    },
  },
  plugins: [],
};
