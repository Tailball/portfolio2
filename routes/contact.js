const express = require('express');
const sendgrid = require('@sendgrid/mail');
const router = express.Router();


router.post('/', (req, res) => {
    const sendGridAPI = process.env.SG_API;
    const sendTo = "jochen.panjaer@telenet.be";

    const name = req.body.name;
    const email = req.body.email;
    const question = req.body.question;
    console.log(`using SG API: ${sendGridAPI}`);
    console.log(`message to contact: ${name} ${email}`);

    let validation = "";
    if (!name) {
        validation = "Name is required. ";
    }
    if (!email) {
        validation += "Email is required. ";
    } else {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email.toLowerCase())) {
            validation = "Email address is not valid. ";
        }
    }
    if (!question) {
        validation += "Your question is required. ";
    }

    if(validation) {
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
                status: "Success"
            });
        })
        .catch(err => {
            console.log(`ERROR from SENDGRID: ${err.code} - ${err.message}`);
            res.status(500).send({
                hasValidationErrors: false,
                status: "Failure",
                message: "Something went wrong on the server. Please contact jochen.panjaer@telenet.be if the problem persists."
            });
        });
});

module.exports = router;