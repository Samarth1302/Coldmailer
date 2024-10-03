const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
async function sendEmail(recipient, resumePath) {
  const content = `
Hi ${recipient.name}, 
 < BODY OF THE EMAIL WITH 
 CONTENT AND COVER LETTER >
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient.email,
    subject: `Opportunities at ${recipient.company}`,
    text: content,
    attachments: [
      {
        filename: "<NAME TO BE GIVEN TO THE RESUME.pdf>",
        path: resumePath,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
