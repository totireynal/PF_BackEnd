// const messageMail = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// messageMail.setApiKey('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');

module.exports = sgMail;