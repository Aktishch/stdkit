const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, matchComponents, theme }) => {
  addComponents({
    '.pack': {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: theme('content.auto'),
        display: 'block',
        paddingTop: 'var(--tw-pack-size)',
      },
    },
  })
  matchComponents(
    {
      pack: (size) => {
        return { '--tw-pack-size': `${size}%` }
      },
    },
    {
      values: {
        xs: 50,
        sm: 60,
        md: 75,
        lg: 90,
        xl: 100,
        xxl: 125,
      },
    }
  )
})
