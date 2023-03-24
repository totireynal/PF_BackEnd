const messageMail = require("../../controllers/sendGridController/sendGridController");
require('dotenv').config();

const sendGridHandler = async (req, res) => {
  const { to, subject, text } = req.body;

  console.log('el papichulo',to);
  const message = {
    to,
    from: process.env.EMAIL_SENDGRID,
    subject,
    text,
  };

  try {
    // console.log(messageMail(message), 'vaaaa');
    // return res.status(201).json(await messageMail(message));
    console.log('Vamosssssss Funciona',await messageMail.send(message));
  } catch (error) {
    return res.status(404).json('Message not send, CRACK!!!');
  }
};

module.exports = sendGridHandler;
