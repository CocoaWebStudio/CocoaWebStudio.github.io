'use strict'
import nodemailer from 'nodemailer'
import consola from 'consola'

export async function sendEmail(email) {
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
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  })

  // send mail with defined transport object
  await transporter.sendMail(email)
  .then((res) => {
    console.log(res)
    consola.ready({
      message: `email sent`,
      badge: true
    })
  })
  .catch((e) => {
    consola.error({
      message: e,
      badge: true
    })
  })
}
