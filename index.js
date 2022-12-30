const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'saikumar.gopisetty@otis.com', // Change to your recipient
  from: 'saikumar.gopisetty@otis.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })