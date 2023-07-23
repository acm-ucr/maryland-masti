/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        masti: {
          black: "#0C0102",
          "red-300": "#540911",
          "red-200": "#A51222",
          "red-100": "#D62828",
          beige: "#EAE2B7",
        },
      },
    },
  },
  plugins: [],
};
