const KoaRouter = require('koa-router'),
  router = new KoaRouter(),
  koaBody = require('koa-body'),
  postContactUs = require('./contact-us').postContactUs,
  postBrochure = require('./brochure').postBrochure

router.post('/contact-us', koaBody(), async (ctx, next) => {
  await postContactUs(ctx, next)
})

router.post('/brochure', koaBody(), async (ctx, next) => {
  await postBrochure(ctx, next)
})

module.exports = { router }
