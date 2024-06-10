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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        white: 'var(--color-white)',
        infodark: 'var(--color-info-dark)',
        dark: 'var(--color-dark)',
        darkvariant: 'var(--color-dark-variant)',
        light: 'var(--color-light)',
        background: 'var(--color-background)',
        text: 'var(--color-text)'
      },
    },
  },
  plugins: [],
}

