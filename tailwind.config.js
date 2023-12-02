/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EDE0D4',
          100: '#E6CCB2',
          200: '#DDB892',
          300: '#B08968',
          400: '#7F5539',
          500: '#9C6644'
        },
        secondary: {
          50: '#000000'
        }
      }
    },
  },
  plugins: [],
}

