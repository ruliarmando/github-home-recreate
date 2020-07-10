module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'github-header': '#24292e',
        'github-search': '#404448',
        'github-search-text': '#8C8F92',
        'github-new-button': '#2ea44f',
        'js-yellow': '#f1e05a',
      },
      minWidth: {
        'github-search': '300px',
      },
      padding: {
        'header-y': '1.65rem'
      },
      width: {
        'github-sidebar': '337.25px',
      },
      margin: {
        53: '53px',
        'github-main': '350px',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
