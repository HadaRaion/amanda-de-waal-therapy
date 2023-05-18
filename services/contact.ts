import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
	// This is still happening on the client side. I just want to separate this business logic from components.
	// I need to fetch and get the response from the nodemailer server.
	const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(email),
	});

	const data = await response.json();
	console.log('data :>> ', data);

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong to request server.');
	}

	return data;
}
