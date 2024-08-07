/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{html,js}",

  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'light_header_image': "url('/assets/bg-desktop-light.jpg')",
        'dark_header_image': "url('/assets/Todo-Desktop.png')",
        'light_header_image_mobile': "url('/assets/bg-mobile-light.jpg')",
        'dark_header_image_mobile': "url('/assets/Todo-Mobile.png')",
      })
    },
  },
  plugins: [],
}

