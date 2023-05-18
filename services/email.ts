import nodemailer from 'nodemailer';

export type EmailData = {
	from: string;
	firstName: string;
	lastName?: string;
	subject?: string;
	phoneNumber?: string | number;
	message: string;
};

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export const sendEmail = async (data: EmailData) => {
	const { from, firstName, lastName, subject, phoneNumber, message } = data;
	const mailData = {
		from,
		to: process.env.EMAIL_USER,
		subject: subject
			? `[From Website] ${subject}`
			: '[From Website] Complimentary Consultation',
		html: `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${firstName} ${lastName}</li>
      <li>Email: ${from}</li>
      <li>Phone Number: ${phoneNumber || 'Not provided'}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    `,
	};

	return transporter.sendMail(mailData);
};
