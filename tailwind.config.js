/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        ColorPurple: "#A2A1F4",
        ColorRed: "#F4A1CA",
        ColorYellow: "#F3F4A1",
        ColorGreen: "#A1F4CB",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
