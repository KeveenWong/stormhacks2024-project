/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#fde2e4',
          200: '#fbc4c7',
          300: '#f8a6aa',
          400: '#f5878d',
          500: '#f26970',
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover'], // Ensure scale works for active and hover states
    },
  },
  plugins: [],
};
