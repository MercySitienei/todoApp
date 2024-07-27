/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        light_header_image: "url('./public/assets/bg-desktop-light.jpg')",
        dark_header_image: "url('./public/assets/Todo-Desktop.png')",
        light_header_image_mobile: "url('./public/assets/bg-mobile-light.jpg')",
        dark_header_image_mobile: "url('./public/assets/Todo-Mobile.png')",
      }
    },
  },
  plugins: [],
}

