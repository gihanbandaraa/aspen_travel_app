/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#FFFFFF",
        secondary:"#176FF2",
      },
      fontFamily :{
        titleFont:["Hiatus" ,"sans-serif"],
        primaryFont:["Montserrat" ,"sans-serif"],
        primaryFont700:["Montserrat700" ,"sans-serif"],
        primaryFont500:["Montserrat500" ,"sans-serif"],
        secondaryFont:["CircularXX" ,"sans-serif"],
      }
    },
  },
  plugins: [],
}

