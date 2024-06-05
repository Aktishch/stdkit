const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, matchComponents, theme }) => {
  addComponents({
    '.input-cover': {
      display: 'flex',
      width: '100%',
      '--input-radius': '8px',

      '& .input': {
        flexGrow: 1,
      },

      '& .input:first-child': {
        borderTopLeftRadius: 'var(--input-radius)',
        borderBottomLeftRadius: 'var(--input-radius)',
      },

      '& .input:last-child': {
        borderTopRightRadius: 'var(--input-radius)',
        borderBottomRightRadius: 'var(--input-radius)',
      },
    },

    '.input': {
      '--input-text': theme('colors.black.DEFAULT'),
      display: 'block',
      width: '100%',
      height: 'var(--input-size)',
      color: 'var(--input-text)',
      backgroundColor: theme('colors.white.DEFAULT'),
      padding: 'calc(var(--input-size) / 4) calc(var(--input-size) / 3)',
      border: `1px solid ${theme('colors.gray.DEFAULT')}`,
      transition: '0.2s ease',
      userSelect: 'initial',

      '&:not(&-error):focus': {
        borderColor: theme('colors.primary.DEFAULT'),
      },

      '&:disabled': {
        pointerEvents: 'none',
        opacity: 0.5,
      },

      '&-fade': {
        '--input-text': theme('colors.white.DEFAULT'),
        backgroundColor: 'transparent',
      },

      '&-error': {
        borderColor: theme('colors.red.DEFAULT'),
      },

      '&:-webkit-autofill': {
        color: 'var(--input-text) !important',
        borderColor: theme('colors.gray.DEFAULT'),
        background: 'none !important',
        appearance: 'none',
        transition: 'background-color 10000s ease-in-out 0s',
        '-webkit-text-fill-color': 'var(--input-text) !important',
        '-webkit-text-stroke-color': 'var(--input-text) !important',
      },
    },
  })

  matchComponents(
    {
      'input-cover': (radius) => {
        return {
          '--input-radius': radius,
        }
      },
    },

    {
      values: theme('borderRadius'),
    }
  )

  matchComponents(
    {
      input: (size) => {
        return {
          '--input-size': size,
        }
      },
    },

    {
      values: theme('constants'),
    }
  )
})
