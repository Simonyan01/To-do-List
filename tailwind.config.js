/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,scss}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scroll-container': {
          overflowY: 'auto',
          borderRadius: '0.5rem',
        },
        '.scroll-container::-webkit-scrollbar': {
          width: '8px',
        },
        '.scroll-container::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '6px',
        },
        '.scroll-container::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(0, 0, 0, 0.5)',
          cursor: "pointer"
        },
      })
    }
  ],
}

