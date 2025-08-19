/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      clipPath: {
        'custom-arrow': 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%)',
      },
    },
  },
  safelist: [
    'blob-1',
    'blob-2',
    'blob-3',
  ],
  plugins: [],
}

