/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Rethink Sans', 'sans-serif']
      },
      colors: {
        primary: '#e17815',
        secondary: '#1675e2',
        tertiary: '#0c134f',
        accent: '#0611b7',
        danger: '#c53639',
        accent: '#0611b7',
        success: '#85b33b',
        warning: '#bfb91b',
        white: '#fff',
        infodark: '#7d81a1',
        dark: '#363949',
        darkvariant: '#676a83',
        light: '#848bc82e',
        background: '#f6f6f9',
        text: '#0d0d0d'
      },
    },
  },
  plugins: [],
}

