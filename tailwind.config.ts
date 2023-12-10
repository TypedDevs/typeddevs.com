import { type Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.md',
    './components/**/*.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
      },
    },
    colors: {
      transparent: '#00000000',
      brand: {
        yellow: '#fad01f',
        orange: '#ea6810',
        red: '#d90000',
        maroon: '#7c1010',
        gray: '#1f1f1f',
      },
    },
    extend: {
      fontFamily: {
        title: [
          'IBM Plex Sans',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
