/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  
  ],
    
  theme: {
    extend: {
      colors: {
        softorange: 'hsl(35, 77%, 62%)',
        softred: 'hsl(5, 85%, 63%)',



        offwhite: 'hsl(36, 100%, 99%)',
        grayishblue: 'hsl(233, 8%, 79%)',
        darkgrayishblue: 'hsl(236, 13%, 42%)',
        verydarkblue: 'hsl(240, 100%, 5%)',
      },

      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}

