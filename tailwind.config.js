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
      'xsm': {'min': '480px'},    
      'msm': {'min': '700px'},
      'lg': {'max': '1025px'},
      'sm': {'max': '700px'},
      'lgm': {'min': '1025px'},
      'xl': {'max': '1279px'},
      '2xl': {'max': '1535px'},
      'larg': {'max': '970px'},
      'md': {'max': '767px'},
      'sm': {'max': '700px'},
      'xs': {'max': '500px'},
      'xtra': {'max': '400px'},    

    },
    extend: {},
  },
  plugins: [],
}

