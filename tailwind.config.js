/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scroll-container::-webkit-scrollbar': {
          width: '8px',
        },
        '.scroll-container::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.3)',
          cursor: "pointer",
          borderRadius: '6px'
        },
        '.scroll-container::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(0, 0, 0, 0.7)',
        }
      })
    }
  ]
}

