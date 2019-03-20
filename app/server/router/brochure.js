'use strict'
const { resolve } = require('path'),
  rp = require('request-promise-native'),
  validator = require('validator'),
  { sendEmail } = require('../commonFunctions'),
  consola = require('consola')

class Validation {
  constructor(body) {
    this.email = validator.normalizeEmail(body.email, { all_lowercase: true })
    this.name = validator.blacklist(body.name, '\\[\\]="\'')
    this.name = validator.escape(this.name).trim()
  }

  validate() {
    consola.info({
      message: `start validation brochure`,
      badge: true
    })

    if (
      validator.isEmail(this.email) &&
      validator.isLength(this.name, { min: 3, max: 50 })
    ) {
      return true
    } else {
      return false
    }
  }
}

async function postBrochure(ctx, next) {
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
        ctx.response.status = 200
        const emailAlert = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: process.env.BROCHURE_SUBJECT,
          html: `
          <ul>
            <li>nombre: ${form.name}</li>
            <li>email: ${form.email}</li>
          </ul>
          <p>${form.name} acaba de descargarse el brochure</p>
        `
        }
        await sendEmail(emailAlert)
        const email = {
          from: process.env.EMAIL_USER,
          to: `${form.email}`,
          subject: 'Brochure de Smarensol',
          text: `${form.name}  puede encontrar adjunto nuestro brochure.  Smarensol S.A.,

        `,
          attachments: [
            {
              // file on disk as an attachment
              filename: 'Smarensol.pdf',
              path: resolve('../app/server/assets/Smarensol.pdf')
            }
          ]
        }
        await sendEmail(email)
        return (ctx.body = true)
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

module.exports = { postBrochure }
