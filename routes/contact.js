const express = require('express');
const sendgrid = require('@sendgrid/mail');
const router = express.Router();


router.post('/', (req, res) => {
    const sendGridAPI = process.env.SG_API;
    const sendTo = "jochenpanjaergraphics@telenet.be";

    const name = req.body.name;
    const email = req.body.email;
    const question = req.body.question;
    console.log(`message to contact: ${name} ${email}`);

    let validation = [];

    if (!name) {
        validation.push("name");
    }

    if (!email) {
        validation.push("email");
    } else {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email.toLowerCase())) {
            validation.push("emailform");
        }
    }

    if (!question) {
        validation.push("question");
    }

    if(validation.length) {
        return res.send({
            hasValidationErrors: true,
            validationErrors: validation
        });
    }

    sendgrid.setApiKey(sendGridAPI);
    const msg = {
        to: sendTo,
        from: email,
        subject: 'Question from Jochen Panjaer Graphics from ' + name,
        text: question,
    };

    sendgrid.send(msg)
        .then(sgRes => {
            console.log('SUCCESS from SENDGRID');
            res.status(200).send({
                hasValidationErrors: false,
                status: 1
            });
        })
        .catch(err => {
            console.log(`ERROR from SENDGRID: ${err.code} - ${err.message}`);
            res.status(500).send({
                hasValidationErrors: false,
                status: 2
            });
        });
});

module.exports = router;