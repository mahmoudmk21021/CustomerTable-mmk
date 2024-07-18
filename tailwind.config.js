/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "960px",
        xl: "1220",
        "2xl": "1380",
      },
    },
    extend: {},
  },
  plugins: [],
};
