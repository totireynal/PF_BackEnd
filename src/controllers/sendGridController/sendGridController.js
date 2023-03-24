// const messageMail = require('@sendgrid/mail');
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
