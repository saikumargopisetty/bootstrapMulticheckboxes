const sgMail = require('@sendgrid/mail')
const express = require('express')
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));


sgMail.setApiKey('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')

app.get('/', () =>  console.log('yes'));
app.post('/sendmail', (req, res) => {
    const {} = req.body;
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'halts@yopmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent');
                res.send({status: true, message:'success'});
            })
            .catch((error) => {
                console.error(error)
                res.send({status: false, message:error});

            })
});

app.listen(port, () => {
    console.log('listing ');
})
