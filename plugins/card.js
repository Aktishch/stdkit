const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, theme }) => {
  const shadow = parseColor(theme('colors.black.DEFAULT')).color

  addComponents({
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: theme('colors.white.DEFAULT'),
      borderRadius: '2rem',
      boxShadow: `4px 4px 6px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.2 })}`,
      transition: '200ms ease',
      overflow: 'hidden',
      '&-active': {
        '&:active': {
          transform: 'translateY(0.25rem)',
        },
      },
      '&-content': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
    },
  })
})
