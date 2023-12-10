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
      yellow: {
        100: '#fef9e3',
        200: '#fdeeac',
        300: '#fce274',
        400: '#fbd63d',
        500: '#f9cb06',
        600: '#c29e04',
        700: '#8b7103',
        800: '#534402',
        900: '#1c1601',
      },
      orange: {
        100: '#fdeee4',
        200: '#facdaf',
        300: '#f6ac7a',
        400: '#f28b45',
        500: '#ef6a10',
        600: '#ba520d',
        700: '#853b09',
        800: '#502305',
        900: '#1a0c02',
      },
      red: {
        100: '#ffe3e3',
        200: '#ffaaaa',
        300: '#ff7171',
        400: '#ff3939',
        500: '#ff0000',
        600: '#c60000',
        700: '#8e0000',
        800: '#550000',
        900: '#1c0000',
      },
      gray: {
        100: '#f1f1f1',
        200: '#d4d4d4',
        300: '#b8b8b8',
        400: '#9c9c9c',
        500: '#808080',
        600: '#636363',
        700: '#474747',
        800: '#2a2a2a',
        900: '#0e0e0e',
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
