const KoaRouter = require('koa-router')

const router = new KoaRouter()

const koaBody = require('koa-body')

const postContactUs = require('./contact-us').postContactUs

const postBrochure = require('./brochure').postBrochure

router.post('/contact-us', koaBody(), async (ctx, next) => {
  await postContactUs(ctx, next)
})

router.post('/brochure', koaBody(), async (ctx, next) => {
  await postBrochure(ctx, next)
})

module.exports = { router }
