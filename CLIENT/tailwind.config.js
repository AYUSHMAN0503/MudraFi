/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gold: '#FFD700',
        purple: '#A855F7',

        
        "gray-20": "#F8F4EB",
        "gray-30": "#89CFF0",
        
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      
        orange: {
          '50': '#fef3e0',
          '100': '#fde0ab',
          '200': '#fcc476',
          '300': '#fba141',
          '400': '#fa8f0d',
          '500': '#e37603', 
          '600': '#b35e02',
          '700': '#7f4501',
          '800': '#4b2c00',
          '900': '#170300',
        },
        red: {
          '50': '#fef0f0',
          '100': '#fec6c6',
          '200': '#fe9b9b',
          '300': '#fd7171',
          '400': '#fd4646',
          '500': '#e31a1a', 
          '600': '#b71414',
          '700': '#850e0e',
          '800': '#540808',
          '900': '#240303',
        },
        gold: {
          '50': '#fdf7e3',
          '100': '#fce6b6',
          '200': '#fbd589',
          '300': '#f9c45c',
          '400': '#f8b42f',
          '500': '#e89f04', 
          '600': '#b67f03',
          '700': '#855d02',
          '800': '#533c01',
          '900': '#211c00',
        },
        purple: {
          '50': '#f4f1f9',
          '100': '#d6cde6',
          '200': '#b9a9d4',
          '300': '#9b85c1',
          '400': '#7e61af',
          '500': '#624d9d', 
          '600': '#4b3d7b',
          '700': '#362d5a',
          '800': '#201d38',
          '900': '#0a0e17',
        },
          Blue:{
          "50" : "#77D4FC",
          "100" :"#00A6EE",
        },

        Green:{
         "50" : "#00C4A2"
          }
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/3669619.jpg')" }),
    
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      slg:"1275px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});