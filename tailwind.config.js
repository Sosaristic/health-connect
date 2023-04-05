/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d8e66",
        secondary: "#e7f6f1",
        shadow: "#f9f9f9",
        white: "#ffffff",
        hover: "rgb(41, 120, 100)"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      backgroundImage:{
        circle:"linear-gradient(20deg, #08eae7 0%, #2AF598 100%)",
        
      }
    },
  },
  plugins: [],
}

