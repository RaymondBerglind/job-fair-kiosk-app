var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var texts = require('../nls/texts');
var signupEmail  = require('../html/htmlSignupEmail');
var fileWriter = require('../helpers/fileWriter');
var emailAccount = require('../secret/emailAccount');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://' + emailAccount.userAccount + ':' + emailAccount.userPassword + '@smtp.gmail.com');
var mailOptions = {
    secureConnection: true,
    replyTo: texts.emailReplyTo
};

router.post('/', function (req, res) {
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    sendEmail(req.body.email, texts.emailSender, texts.emailSubject, texts.emailBody)
        .then(function (result) {
            fileWriter.writeSignupData(req.body);
            res.sendStatus(result);
        })
        .catch(function (error) {
            res.sendStatus(error);
        });
});

function sendEmail(to, from, subject, msg) {
    return new Promise(function (resolve, reject) {
        mailOptions.to = to;
        mailOptions.from = from;
        mailOptions.text = msg;
        mailOptions.html = signupEmail;
        mailOptions.subject = subject;
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(400);
            } else {
                console.log("Info: " + info.response);
                if (info.rejected.includes(to)) {
                    console.log("Failed to send email.");
                    reject(400);
                } else {
                    resolve(200);
                }
            }
        });
    })
}

module.exports = router;
