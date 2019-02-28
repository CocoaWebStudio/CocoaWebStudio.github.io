const router = new require('koa-router')(),
  postContactUs = require('./contact-us').postContactUs,
  koaBody = require('koa-body')

router.post('/contact-us', koaBody(), async (ctx, next) => {
  await postContactUs(ctx, next)
})



router.get('/api', async ctx => {
  "use strict";
  var test = {
    data: 'test',
    jp: 'jojo'
  }
  return ctx.body = JSON.stringify(test)
})

module.exports = { router }
