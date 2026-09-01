/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        navylight: "#12294D",
        band: "#1D5C96",
        gold: "#F2B705",
        goldlight: "#FFC93C",
        cream: "#F7F8FA",
        ink: "#1A1A1A",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
