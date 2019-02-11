module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'pug', 'scss'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.pug$': 'vue-jest',
    '^.+\\.scss$': 'vue-jest'
  },
  globals: {
    'vue-jest': {
      pug: {
        basedir: '<rootDir>/$1'
      },
      resources: {
        scss: [
          "./node_modules/package/_mixins.scss",
          "./assets/css/customVariables.scss",
          "./assets/css/main.scss"
        ]
      }
    }
  }
}
