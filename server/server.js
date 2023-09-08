const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'valentinc.boury@gmail.com',
    pass: 'vivxjslkapzqalef',
  },
});

app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'valentinc.boury@gmail.com',
    subject: message,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.set("oauth2_provision_cb", (user, renew, callback) => {
    let accessToken = userTokens[user];
    if (!accessToken) {
      return callback(new Error("Unknown user"));
    } else {
      return callback(null, accessToken);
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
