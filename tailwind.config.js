/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: '459.98px',
      sm: '575.98px',
      md: '767.98px',
      lg: '991.98px',
      xl: '1365.98px',
      xxl: '2499.98px',
    },
    constants: {
      xs: 36,
      sm: 42,
      md: 48,
      lg: 52,
      xl: 58,
      xxl: 64,
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
      },
      dark: {
        DEFAULT: '#26283B',
      },
    },
    fontFamily: {
      base: 'var(--tw-font-base)',
    },
    gridColumn: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    gridRow: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    extend: {
      content: {
        auto: '""',
      },
      fontSize: {
        min: ['0.5rem', '0.625rem'],
        xxs: ['0.625rem', '0.75rem'],
        '1.5xl': ['1.375rem', '1.75rem'],
        '2.5xl': ['1.75rem', '2.125rem'],
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    require('./plugins/container'),
    // require('./plugins/dialog'),
    require('./plugins/card'),
    require('./plugins/pack'),
    require('./plugins/picture'),
    require('./plugins/input'),
    require('./plugins/button'),
    // require('./plugins/switch'),
    // require('./plugins/animation'),
  ],
}
