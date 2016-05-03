const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'MailGun',
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASSWORD,
  },
});

exports.postContact = (req, res) => {
  console.log(req.body);
  const from = req.body.email;
  const name = req.body.name;
  const body = req.body.message;
  const to = 'anthonyjillions@gmail.com';
  const subject = name;

  const mailOptions = {
    to,
    from,
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      res.send({
        message: 'uh oh. something went wrong please try again.',
      });
    }
    res.send({
      message: 'Hey, thanks for getting sending an email. I&#39;ll get back to you asap.',
    });
  });
};
