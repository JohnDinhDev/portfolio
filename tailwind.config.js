module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '525px',
      sm: '640px',
      md: '768px',
      'md-2': '950px',
      lg: '1024px',
      'lg-2': '1174px',
      xl: '1280px',
      'xl-1': '1400px',
      'xl-2': '1466px',
      '2xl': '1600px',
      '4k': '1900px'
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
          tint: '#FAFAFA'
        },
        blue: {
          dark: '#002C3D',
          DEFAULT: '#029CC2',
          light: '#ECEDEF',
          circleLight: '#03C5F5',
          circleDark: '#0E7CC6CF'
        },
        orange: {
          DEFAULT: '#FF7340',
          dark: '#B3502D'
        },
        red: {
          DEFAULT: '#F3605C',
          border: '#D64542'
        },
        yellow: {
          DEFAULT: '#F8BE39',
          border: '#D89F2C'
        },
        green: {
          DEFAULT: '#50C845',
          border: '#40AB2F'
        }
      },
      fontFamily: {
        display: ['"Noto Serif"', 'sans-serif'],
        headings: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif']
      },
      spacing: {
        72: '18rem',
        84: '22.5rem',
        96: '24rem',
        120: '120%'
      },
      height: {
        'lg-2-hero': '50rem'
      },
      scale: {
        65: '.65'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
