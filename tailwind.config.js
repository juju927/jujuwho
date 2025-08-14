/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "bg-fuchsia-400",
    "bg-cyan-400",
    "bg-orange-400",
    "bg-blue-400",
    "decoration-red-700",
    "hover:text-red-700",
    "decoration-yellow-700",
    "hover:text-yellow-700",
    "decoration-amber-600",
    "decoration-orange-500",
    "hover:text-blue-500",
    "hover:text-red-700",
    "decoration-indigo-500",
  ],
  plugins: [],
  darkMode: "class"
}