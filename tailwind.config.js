/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '850px'},

      'mdm': {'min': '850px'},

      'sm': {'max': '650px'},

      'xs': {'max': '480px'},

      'xsm': {'min': '480px'},

      'smm': {'min': '639px'},
    },
    extend: {
      backgroundImage: {
        image1: "url('../public/assets/images/profile.jpeg')",
      },
    },
  },
  plugins: [],
}

