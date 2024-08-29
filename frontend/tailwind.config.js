/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        'custom': 'calc(100% - 56px)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient( #9CC485 , #D5EEC6 )',
      },
    },
  },
  plugins: [],
}

