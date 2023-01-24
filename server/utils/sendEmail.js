const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			service: 'gmail',
			port: 587,
			secure: true,
			auth: {
				user: "powerbyte.2022@gmail.com",
				pass: "tusmphvfxnxnmmqf",
			},
		});

		await transporter.sendMail({
			from: "powerbyte.2022@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};