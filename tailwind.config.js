/** @type {import('tailwindcss').Config} */

const createColor = (variable) => {
  return ({ opacityValue }) => {
    return `rgba(var(--color-${variable}), ${opacityValue !== undefined ? opacityValue : 1})`
  }
}

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
      xs: 28,
      sm: 34,
      md: 46,
      lg: 52,
      xl: 60,
      xxl: 66,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: createColor('primary'),
      },
      black: {
        DEFAULT: createColor('black'),
      },
      white: {
        DEFAULT: createColor('white'),
      },
      gray: {
        DEFAULT: createColor('gray'),
      },
      grey: {
        DEFAULT: createColor('grey'),
      },
      red: {
        DEFAULT: createColor('red'),
      },
      green: {
        DEFAULT: createColor('green'),
      },
      dark: {
        DEFAULT: createColor('dark'),
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
    require('./plugins/pack'),
    require('./plugins/input'),
    require('./plugins/button'),
  ],
}
