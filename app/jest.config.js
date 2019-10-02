// jest.config.js
module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/web/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'pug', 'scss'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.pug$': 'vue-jest',
    '^.+\\.scss$': 'vue-jest'
  },
  snapshotSerializers: ["jest-serializer-vue"],
  globals: {
    'vue-jest': {
      pug: {
        basedir: '<rootDir>/web/$1'
      },
      resources: {
        scss: [
          './node_modules/package/_mixins.scss',
          './web/assets/css/customVariables.scss',
          './web/assets/css/main.scss'
        ]
      }
    }
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
