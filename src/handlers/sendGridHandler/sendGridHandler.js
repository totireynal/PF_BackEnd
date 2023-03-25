const sgMail = require("../../controllers/sendGridController/sendGridController");
require("dotenv").config();

const sendGridHandler = async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: process.env.EMAIL_SENDGRID,
    subject,
    text,
  };

  await sgMail
    .send(msg)
    .then(() => {
      return res.status(201).send("El correo ha sido enviado correctamente!!");
    })
    .catch((error) => {
      return res
        .status(402)
        .json({ error: "El correo no ha sido enviado correctamente!!" });
    });
};

module.exports = sendGridHandler;
