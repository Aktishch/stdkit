/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: 459.98 + 'px',
      sm: 575.98 + 'px',
      md: 767.98 + 'px',
      lg: 991.98 + 'px',
      xl: 1365.98 + 'px',
      xxl: 2559.98 + 'px',
    },
    constants: {
      xs: '28px',
      sm: '34px',
      md: '46px',
      lg: '52px',
      xl: '60px',
      xxl: '66px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: '#7352CF',
      },
      black: {
        DEFAULT: '#1F1F1F',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        DEFAULT: '#CDCDCD',
      },
      grey: {
        DEFAULT: '#EDEFF1',
      },
      red: {
        DEFAULT: '#ED2F4B',
        light: '#FFDEDE',
      },
      green: {
        DEFAULT: '#459F2B',
        light: '#D8EDD7',
      },
      blue: {
        DEFAULT: '#547BB7',
      },
      gold: {
        DEFAULT: '#D1983A',
      },
      dark: {
        DEFAULT: '#26283B',
      },
    },
    fontFamily: {
      base: 'var(--font-base)',
    },
    extend: {
      content: {
        auto: '""',
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    require('./plugins/container'),
    require('./plugins/pack'),
    require('./plugins/picture'),
    require('./plugins/form'),
    require('./plugins/input'),
    require('./plugins/button'),
  ],
}
