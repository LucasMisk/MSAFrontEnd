/** @type {import('tailwindcss').Config} */
import generated from "@tailwindcss/forms";

import generated0 from "@tailwindcss/container-queries";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [generated, generated0],
};
