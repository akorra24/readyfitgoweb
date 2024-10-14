/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        secondary: "#68B268",
        background: "#121212",
      },
    },
  },
  plugins: [],
};
