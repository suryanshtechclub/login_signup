const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", // Or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
  };
  // Await and log the result properly
  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("Email sent:", info.response);
      return info;
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      throw err;
    });
};
module.exports = sendOTPEmail;
