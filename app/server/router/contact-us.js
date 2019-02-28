"use strict"
const
 // { sendEmail } = require('../commonFunctions'),
  validator = require('validator'),
  consola = require('consola')

class Validation {
  constructor(body) {
    this.email = validator.normalizeEmail(body.email, {all_lowercase: true})
    this.name = validator.blacklist(body.name, '\\[\\]="\'')
    this.phone = validator.whitelist(body.phone, '+1234567890')
    this.msg = validator.blacklist(body.msg, '\\[\\]="\'')
   // this.msg = validator.escape(this.msg).trim()
  }
  
  async validate() {
    consola.info({
      message: `start validation`,
      badge: true
    })
    
    if(
      validator.isEmail(this.email) &&
      validator.isLength(this.name, {min:3, max: 25}) &&
      validator.isLength(this.msg, {min:20, max:1000})
    ) {
      return true
    } else {
      return false
    }
  }
}

async function postContactUs(ctx, next) {
  let form = new Validation(ctx.request.body)
  if(await form.validate()) {
    consola.ready({
      message: `validation passed `,
      badge: true
    })
    let email = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: process.env.EMAIL_CONTACT_SUBJECT,
      html:
        ` <ul>
            <li>nombre: ${form.name}</li>
            <li>email: ${form.email}</li>
            <li>teléfono: ${form.phone}
          </ul>
          <p>${form.comentary}</p>
        `
    }
  
    // await sendEmail(email)
    return ctx.body = form
  } else {
    consola.error({
      message: `validation not passed `,
      badge: true
    })
    ctx.response.status = 406;
    return ctx.body = {
    			status: 'error!',
    			message: form
    		};
  }
  next()
}

module.exports = { postContactUs }
