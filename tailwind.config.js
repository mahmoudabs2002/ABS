/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "secondary" : "#283035",
        "primary" : "#fe5008",
        "body" : '#000000',
        'sub' : '#8C8CA1',
      },
      backgroundImage: {
        'projects' : "url('/our_projects_background_image.png')"
      }
    },
  },
  plugins: [],
}