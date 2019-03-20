'use strict'
const nodemailer = require('nodemailer'),
  consola = require('consola')

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async email => {
  consola.ready({
    message: `send email start`,
    badge: true
  })

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: 587, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS // generated ethereal password
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
