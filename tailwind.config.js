/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(10rem,1fr))",
        fluidNav:"repeat(auto-fit,minmax(8rem,2fr))"
      },
    
      width: {
        'fit-content': 'fit-content'
      },
      borderRadius: {
        "fullRadius": "50%"
      }
    },
  },
  plugins: [require("daisyui")],
}