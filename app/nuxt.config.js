const pkg = require('./package')
const i18n = require('./i18n.config')
module.exports = {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		meta: [{
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
		noscript: [{
			innerHTML: 'This website requires JavaScript.'
		}],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
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
	css: [
		'@/assets/css/main.scss'
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://bootstrap-vue.js.org/docs/
		['bootstrap-vue/nuxt', {
			css: false
		}],
		'@nuxtjs/pwa',
		['nuxt-i18n', i18n]
	],
	/*
	 ** Axios module configuration
	 */
	axios: {
	  baseURL: 'http://localhost:8080'
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
