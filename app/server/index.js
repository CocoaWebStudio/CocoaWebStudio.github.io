import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import config from '../nuxt.config.js'
import { router } from './router'

const app = new Koa()

// Import and Set Nuxt.js options
config.dev = !(app.env === 'production')

// add custom server routes
app.use(router.routes())
app.use(router.allowedMethods())

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 8081
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

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
