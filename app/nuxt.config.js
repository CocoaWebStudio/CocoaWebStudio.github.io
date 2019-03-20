require('dotenv').config()
const i18n = require('./i18n.config'),
  bootstrapVue = require('./bootstrapVue.config')
  fs = require('fs'),
  dotenv = require('dotenv')

if(process.env.NODE_ENV === 'production'){
  const envConfig = dotenv.parse(fs.readFileSync('.env.production'))
  for (let k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

module.exports = {
  mode: 'universal',
  srcDir: 'web/',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ],
    script: [
      {
        src:
          'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
        defer: true
      }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#0002F5'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],

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
    '@nuxtjs/pwa',
    ['nuxt-i18n', i18n]
  ],
  bootstrapVue: bootstrapVue,

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
