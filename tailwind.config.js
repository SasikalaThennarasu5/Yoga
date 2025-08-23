/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSerif: ["'Roboto Serif'", "serif"],
      },
      colors: {
        purpleMain: "#B285C0",
        siteBg: "#feeeee",
        Heading: "#6f145f",
      },
    },
  },
  plugins: [],
}
