const Router = require('koa-router'),
  koaBody = require('koa-body'),
  { sendEmail } = require('../commonFunctions')


const router = new Router()

router.post('/contact-us', koaBody(), async (ctx, next) => {
  let email = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: process.env.EMAIL_CONTACT_SUBJECT,
    html:
      ` <ul>
          <li>nombre: ${ctx.request.body.name}</li>
          <li>email: ${ctx.request.body.email}</li>
          <li>teléfono: ${ctx.request.body.telephone}
        </ul>
        <p>${ctx.request.body.comentary}</p>
      `
  }

  await sendEmail(email)
  return ctx.body = 'email enviado!'
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
