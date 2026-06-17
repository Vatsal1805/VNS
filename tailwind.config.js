/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vnsBg: '#0F0B08',       // Deep Warm Black
        vnsSurface: '#1A1208',  // Dark Brown-Black
        vnsCardHover: '#23180B',// Card hover state
        vnsPrimary: '#5C2D0E',  // Chocolate Brown
        vnsAccent: '#C9933A',   // Burnished Gold
        vnsBtnHover: '#D4A853', // Warm Gold for active states
        vnsText: {
          primary: '#F5EDD8',   // Warm Cream White
          secondary: '#A08060', // Muted Beige
        },
        vnsBorder: 'rgba(201, 147, 58, 0.15)', // Gold Alpha border
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        vns: '8px',
      }
    },
  },
  plugins: [],
}
