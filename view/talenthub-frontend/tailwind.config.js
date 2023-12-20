/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        main: "#091337",
        gradient: "linear-gradient(82deg, #842C91 24.78%, #3B55A5 89.57%)"
      },
      backgroundImage: {
        gradient: "linear-gradient(82deg, #842C91 24.78%, #3B55A5 89.57%)"
      },
      fontSize: {
        base: "1.0625rem"
      },
      lineHight: {
        base:'1.9375rem'
      },
      boxShadow: {
        sm:"0px 35px 46px 0px rgba(172, 189, 199, 0.28)"
      }
    },
  },
  plugins: [],
}

