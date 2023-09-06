const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = function (req, res) {
  let { name, email} = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  // const email = await usermodel.findOne({email: req.body.email});

  const mailOption = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_USER,
    subject: "fmc payment",
    html: `<!doctype html>
	<html>
	  <head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Travello notification</title>
	  </head>
	  <body>
		<span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
		<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
		  <tr>
			<td>&nbsp;</td>
			<td class="container">
			  <div class="content">
	
				<!-- START CENTERED WHITE CONTAINER -->
				<table role="presentation" class="main">
	
				  <!-- START MAIN CONTENT AREA -->
				  <tr>
					<td class="wrapper">
					  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
						<tr>
						  <td>
							<p>Message from ${name},</p>
							<p>Update about the user</p>
						  </td>
						</tr>
					  </table>
					</td>
				  </tr>
	
				<!-- END MAIN CONTENT AREA -->
				</table>
				<!-- END CENTERED WHITE CONTAINER -->
	
				<!-- START FOOTER -->
				<div class="footer">
				  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
					<tr>
					  <td class="content-block">
						<span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
						<br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif">Unsubscribe</a>.
					  </td>
					</tr>
					<tr>
					  <td class="content-block powered-by">
						Powered by <a href="http://htmlemail.io">HTMLemail</a>.
					  </td>
					</tr>
				  </table>
				</div>
				<!-- END FOOTER -->
	
			  </div>
			</td>
			<td>&nbsp;</td>
		  </tr>
		</table>
	  </body>
	</html>
	`,
  };
  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      res.send("Email Sent");
    }
  });
};

module.exports = { sendMail };
