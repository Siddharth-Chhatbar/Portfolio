/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetBrainsMono: ["JetBrains Mono"],
      },
      colors: {
        base: "#e5e4e6",
        primary: "#d4dcda",
        secondary: "#6c848d",
      },
    },
  },
  plugins: [],
};
