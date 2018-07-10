const express = require('express');
const sendgrid = require('@sendgrid/mail');
const router = express.Router();

const sendGridAPI = process.env.SG_API;

router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const question = req.body.question;
  console.log(`message to contact: ${name} ${email}`);

  //todo verification

  sendgrid.setApiKey(sendGridAPI);
  const msg = {
    to: 'jochen.panjaer@telenet.be',
    from: email,
    subject: 'Question from Jochen Panjaer Graphics from ' + name,
    text: question,
  };
  sendgrid.send(msg)
  .then(sgRes => {
    res.status(200).send('OK');
  })
  .catch(err => {
    console.log(err);
    res.status(500).send('Something went wrong...');
  });
});

module.exports = router;