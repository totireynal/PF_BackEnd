const messageMail = require('@sendgrid/mail');
// require('dotenv').config();

// messageMail.setApiKey(process.env.SENDGRID_API_KEY);
messageMail.setApiKey('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');

module.exports = messageMail;