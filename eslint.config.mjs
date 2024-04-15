import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  unocss: true,
  typescript: true,
  stylistic: {
    semi: false,
    indent: 2,
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  },
  formatters: {
    css: 'prettier'
  }
})
