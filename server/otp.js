const express = require('express');
const nodemailer = require('nodemailer');
const Router = express.Router();
let otpstore = ""; 

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: ,
    pass: ,
  },
});

function generateOtp() {
  return Math.floor(10000 + Math.random() * 900000).toString();
}

Router.post('/', async (req, res) => {
  const email = req.body.email;
  const otp = generateOtp();
  otpstore = otp; 
  console.log(otp);

  const mailOptions = {
    from: 'gnaneswar9676@gmail.com',
    to: email,
    subject: 'OTP',
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: 'Error sending OTP email.',
        });
      }
      console.log(`OTP email sent successfully to ${email}`);
      res.status(200).json({
        success: true,
        message: 'OTP email sent successfully.',
      });
    });
  } catch (err) {
    console.error('Error sending OTP:', err);
    res.status(500).json({
      success: false,
      message: 'Error sending OTP email.',
    });
  }
});

Router.post('/verify-otp', (req, res) => {
  const clientOtp = req.body.otp;
  const expectedOtp = otpstore;

  if (!expectedOtp) {
    return res.status(400).json({
      success: false,
      message: 'Expected OTP not set.',
    });
  }

  if (clientOtp === expectedOtp) {
    res.status(200).json({
      success: true,
      message: 'OTP verification successful.',
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid OTP.',
    });
  }
});

module.exports = Router;
