const nodemailer = require('nodemailer');
require('dotenv').config({ path: './email.env' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'monicasfoodstudio@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from the Bakery Addiction app.',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error('Error sending test email:', err);
  } else {
    console.log('Test email sent successfully:', info.response);
  }
});