const express = require('express');
const sendgrid = require('@sendgrid/mail');
const router = express.Router();


router.post('/', (req, res) => {
  const sendGridAPI = process.env.SG_API;
  
  const name = req.body.name;
  const email = req.body.email;
  const question = req.body.question;
  console.log(`using SG API: ${sendGridAPI}`);
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
    console.log(`SUCCESS from SENDGRID: ${sgRes}`);
    res.status(200).send('OK');
  })
  .catch(err => {
    console.log(`ERROR from SENDGRID: ${err.code} - ${err.message}`);
    res.status(500).send('Something went wrong on the server...');
  });
});

module.exports = router;