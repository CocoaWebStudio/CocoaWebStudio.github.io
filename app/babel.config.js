module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['@nuxt/babel-preset-app'],
    plugins: [
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      "@babel/plugin-transform-modules-commonjs"
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
