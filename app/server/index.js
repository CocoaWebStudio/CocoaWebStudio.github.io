const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
const router = new Router()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')


async function sendEmail (ctx) {
  console.log(ctx.request.body);
  return ctx.body = JSON.stringify(ctx.request.body)
}


async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 8080
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })
  
  router.post('/pepito', koaBody(), sendEmail)
  router.post('/en', koaBody(),sendEmail)
  router.post('/es', koaBody(),sendEmail)
  router.get('/en/api', async ctx => {
    "use strict";
    var test = {
      data: 'test',
      jp: 'jojo'
    }
    return ctx.body = JSON.stringify(test)
  })
  router.get('/es/api', async ctx => {
    "use strict";
    var test = {
      data: 'test',
      jp: 'jojo'
    }
    return ctx.body = JSON.stringify(test)
  })
  router.get('/api', async ctx => {
    "use strict";
    var test = {
      data: 'test',
      jp: 'jojo'
    }
    return ctx.body = JSON.stringify(test)
  })
  
  app.use(router.routes())
  app.use(router.allowedMethods())

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
