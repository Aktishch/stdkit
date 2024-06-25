const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.form': {
      display: 'flex',
      flexDirection: 'column',
      '&-label': {
        display: 'flex',
        flexDirection: 'column',
      },
      '&-wrapper': {
        display: 'block',
        position: 'relative',
        width: '100%',
      },
      '&-icon': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '40px',
        height: '100%',
        pointerEvents: 'none',
        '&-pointer': {
          pointerEvents: 'auto',
          cursor: 'pointer',
        },
        '&-left': {
          left: 0,
        },
        '&-right': {
          right: 0,
        },
      },
      '&-error': {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.red.DEFAULT'),
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-16px',
        height: '16px',
      },
    },
  })
})
