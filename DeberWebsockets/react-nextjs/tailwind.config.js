/** @type {import('tailwindcss').Config} */

const konstaConfig = require('konsta/config');


module.exports = konstaConfig({

      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

// Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
);
