const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.container': {
      '--padding-block': '44px',
      '--padding-inline': '100vw - 32px',
      padding: 'var(--padding-block) calc(50% - ((var(--padding-inline)) / 2))',

      [`@media (min-width: ${theme('screens.sm')})`]: {
        '--padding-inline': 'var(--sm)',
      },

      [`@media (min-width: ${theme('screens.md')})`]: {
        '--padding-inline': 'var(--md)',
      },

      [`@media (min-width: ${theme('screens.lg')})`]: {
        '--padding-inline': 'var(--lg)',
      },

      [`@media (min-width: ${theme('screens.xl')})`]: {
        '--padding-inline': 'var(--xl)',
      },
    },
  })
})
