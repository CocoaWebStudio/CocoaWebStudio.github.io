'use strict'
import rp from 'request-promise-native'
import validator from 'validator'
import { sendEmail } from '../commonFunctions'
import consola from 'consola'

class Validation {
  constructor(body) {
    this.email = validator.normalizeEmail(body.email, { all_lowercase: true })
    this.name = validator.blacklist(body.name, '\\[\\]="\'')
    this.name = validator.escape(this.name).trim()
    this.phone = validator.whitelist(body.phone, '+1234567890')
    this.msg = validator.blacklist(body.msg, '\\[\\]="\'')
    this.msg = validator.escape(this.msg).trim()
  }

  validate() {
    consola.info({
      message: `start validation`,
      badge: true
    })

    if (
      validator.isEmail(this.email) &&
      validator.isLength(this.name, { min: 3, max: 50 }) &&
      validator.isLength(this.msg, { min: 20, max: 1000 })
    ) {
      return true
    } else {
      return false
    }
  }
}

export async function postContactUs(ctx, next) {
  await rp({
    method: 'POST',
    uri: process.env.RECAPTCHA_SERVER,
    form: {
      secret: process.env.RECAPTCHA,
      response: ctx.request.body.recaptcha
    },
    json: true // Automatically stringifies the body to JSON
  })
    .then(async body => {
      const form = new Validation(ctx.request.body)
      if (body.success && form.validate()) {
        consola.ready({
          message: `validation passed `,
          badge: true
        })
        const email = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: process.env.EMAIL_CONTACT_SUBJECT,
          html: `
          <ul>
            <li>nombre: ${form.name}</li>
            <li>email: ${form.email}</li>
            <li>teléfono: ${form.phone}</li>
          </ul>
          <p>${form.msg}</p>
        `,
          replyTo: `${form.email}`
        }

        sendEmail(email)
        return (ctx.body = form)
      } else {
        consola.error({
          message: `validation not passed `,
          badge: true
        })
        ctx.response.status = 406
        return (ctx.body = {
          status: 'error!',
          message: form
        })
      }
    })
    .catch(function(err) {
      consola.info({
        message: err,
        badge: true
      })
    })
}
