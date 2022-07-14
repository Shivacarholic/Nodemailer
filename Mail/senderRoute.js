const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Enter your email address",
      pass: "Enter your password",
    },
  });

  let toSend = transporter.sendMail(
    {
      from: "Enter your email address",
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
    },
    function (err, result) {
      if (err) {
        return console && console.error(err);
      } else {
        console.log(result);
        return result;
      }
    }
  );
});

module.exports = router;
