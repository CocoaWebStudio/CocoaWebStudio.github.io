'use strict'

const nodemailer = require('nodemailer')

const consola = require('consola')
const config = require('./config')

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async email => {
  consola.ready({
    message: `send email start`,
    badge: true
  })

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: config.EMAIL_SERVER,
    port: 587, // true for 465, false for other ports
    auth: {
      user: config.EMAIL_USER, // generated ethereal user
      pass: config.EMAIL_PASS // generated ethereal password
    },
    tls: {
      ciphers: 'SSLv3'
    }
  })

  // send mail with defined transport object
  await transporter.sendMail(email)
}

module.exports = {
  sendEmail
}
