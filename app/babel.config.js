module.exports = api => {
  api.cache(true)
  return {
    plugins: [
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import'
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current'
              }
            }
          ],
          '@nuxt/babel-preset-app'
        ]
      }
    }
  }
}
