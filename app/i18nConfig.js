module.exports = {
	locales: [
    {
			code: 'en',
			iso: 'en-US',
			file: 'en.js',
      name: 'ENGLISH',
      flag: '/images/flags/en-US.png'
		},
		{
			code: 'es',
			iso: 'es-EC',
			file: 'es.js',
      name: 'ESPAÑOL',
      flag: '/images/flags/es-EC.png'
		}
	],
	strategy: 'prefix_and_default',
	defaultLocale: 'es',
	lazy: true,
	langDir: 'lang/',
	detectBrowserLanguage: {
		// If enabled, a cookie is set once a user has been redirected to his
		// preferred language to prevent subsequent redirections
		// Set to false to redirect every time
		useCookie: true,
		// Cookie name
		cookieKey: 'i18n_redirected',
		// Set to always redirect to value stored in the cookie, not just once
		alwaysRedirect: false,
		// If no locale for the browsers locale is a match, use this one as a fallback
		fallbackLocale: null
	},
	vueI18nLoader: false,
	parsePages: false,
	pages: {
		'contact-us/index': {
			en: '/contact-us',
			es: '/contactenos'
		},
		'about-us/index': {
			en: '/about-us',
			es: '/nosotros'
		},
		'customers': {
			en: '/customers',
			es: '/clientes'
		},
		'product-lines/index': {
			en: '/product-lines',
			es: '/lineas-de-productos'
		},
		'product-lines/industrial/index': {
			en: '/product-lines/industrial',
			es: '/lineas-de-productos/industrial'
		},
		'product-lines/distribution/index': {
			en: '/product-lines/distribution',
			es: '/lineas-de-productos/distribucion'
		},
		'product-lines/substations/index': {
			en: '/product-lines/substations',
			es: '/lineas-de-productos/subestaciones'
		},
		'product-lines/transmission-lines/index': {
			en: '/product-lines/transmission-lines',
			es: '/lineas-de-productos/lineas-transmision'
		}
	}
}
