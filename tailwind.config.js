/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "default": "var(--text)",
        "background": "var(--background)",
        "shade": "var(--shade)",
        "gray": "var(--gray)",
        "white": "var(--white)"
      },
    },
  },
  plugins: [],
}