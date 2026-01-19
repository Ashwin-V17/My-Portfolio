/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1f242d',
        'bg-secondary': '#323946',
        'text-primary': '#fff',
        'accent': '#0ef',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1.4)' },
          '50%': { transform: 'translateY(-3rem) scale(1.4)' },
        }
      }
    },
  },
  plugins: [],
}