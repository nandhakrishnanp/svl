/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ba4f10",
        secondary: "#ff7900",
        accent: "#2a3439",
        pale : "#F5F5F5"
      },
      fontFamily:{
        'popins':["Poppins","system-ui"],
        'mons':["Montserrat","system-ui"]
      },
      backgroundImage:{
        "hero": "url('https://w0.peakpx.com/wallpaper/652/497/HD-wallpaper-gears-black-dark-grey-mechanical.jpg')",
        "bg2": "url('https://images.pond5.com/gears-black-background-mechanical-gears-footage-143868503_iconl.jpeg')",
      }
    },
  },
  plugins: [],
};
