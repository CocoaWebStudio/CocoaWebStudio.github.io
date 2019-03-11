'use strict'

const { resolve } = require('path')
const rp = require('request-promise-native')

const validator = require('validator')

const consola = require('consola')
const { sendEmail } = require('../commonFunctions')
const config = require('../config')

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
    uri: config.RECAPTCHA_SERVER,
    form: {
      secret: config.RECAPTCHA,
      response: ctx.request.body.recaptcha
    },
    json: true // Automatically stringifies the body to JSON
  })
    .then(body => {
      const form = new Validation(ctx.request.body)
      if (body.success && form.validate()) {
        consola.ready({
          message: `validation passed `,
          badge: true
        })
        const email = {
          from: config.EMAIL_USER,
          to: `${form.email}`,
          subject: 'Brochure de Smarensol',
          text: `Aqui puede encontrar adjunto nuestro brochure.  Smarensol S.A.,
 
        `,
          attachments: [
            {
              // file on disk as an attachment
              filename: 'Smarensol.pdf',
              path: resolve('../app/server/assets/Smarensol.pdf')
            }
          ]
        }

        sendEmail(email)
        const emailAlert = {
          from: config.EMAIL_USER,
          to: config.EMAIL_USER,
          subject: config.EMAIL_CONTACT_SUBJECT,
          html: ` 
          <ul>
            <li>nombre: ${form.name}</li>
            <li>email: ${form.email}</li>
          </ul>
          <p>Acaba de descargarse el brochure</p>
        `,
          replyTo: `${form.email}`
        }
        sendEmail(emailAlert)
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

module.exports = { postBrochure }
