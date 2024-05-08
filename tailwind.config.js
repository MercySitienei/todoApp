/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        light_header_image: "url('./src/assets/bg-desktop-light.jpg')",
        dark_header_image: "url('./src/assets/Todo-Desktop.png')",
        light_header_image_mobile: "url('./src/assets/bg-mobile-light.jpg')",
        dark_header_image_mobile: "url('./src/assets/Todo-Mobile.png')",
      }
    },
  },
  plugins: [],
}

