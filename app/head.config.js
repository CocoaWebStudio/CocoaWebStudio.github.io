export default {
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
}
