import fs from 'fs'
import dotenv from 'dotenv'
import i18n from './i18n.config'
import head from './head.config'
import bootstrapVue from './bootstrapVue.config'

if (process.env.NODE_ENV === 'production' && fs.existsSync('.env.production')) {
  const envConfig = dotenv.parse(fs.readFileSync('.env.production'))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

dotenv.config()

export default {
  mode: 'universal',
  srcDir: 'web/',
  /*
   ** Headers of the page
   */
  head,

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#0002F5'
  },

  /*
   ** Global CSS
   */
  css: ['~assets/css/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vee-validate.js'},
    { src: '~plugins/i18n.js' },
    { src: '~plugins/vue-lazyload' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    ['nuxt-i18n']
  ],
  bootstrapVue,
  i18n,

  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: process.env.AXIOS_SERVER
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [
      "vee-validate/dist/rules"
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
