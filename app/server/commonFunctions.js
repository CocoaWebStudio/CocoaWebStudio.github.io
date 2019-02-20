"use strict";
const nodemailer = require("nodemailer"),
consola = require('consola')

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (email) => {
  consola.ready({
    message: `send email start`,
    badge: true
  })

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: 587, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS // generated ethereal password
    },
    tls: {
        ciphers:'SSLv3'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(email)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = {
  sendEmail
}
