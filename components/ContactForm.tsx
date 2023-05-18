'use client';

import { sendContactEmail } from '@/services/contact';
import { useState } from 'react';

type Form = {
	firstName: string;
	lastName?: string;
	from: string;
	subject?: string;
	phoneNumber?: string | number;
	message: string;
	agreedTerms?: boolean;
};

const DEFAULT_DATA = {
	firstName: '',
	lastName: '',
	from: '',
	subject: '',
	phoneNumber: '',
	message: '',
	agreedTerms: false,
};

export default function ContactForm() {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setForm({ ...form, [name]: checked });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('form from client side:>> ', form);
		sendContactEmail(form);
	};

	return (
		<section>
			<p>
				Do you want to learn more about our therapy sessions? Feel free to give
				me a call or complete the form. <br />I try to respond to email
				inquiries within 1-3 business days
			</p>
			<form className="flex flex-col" onSubmit={handleSubmit}>
				<label htmlFor="first-name">First Name</label>
				<input
					type="text"
					name="firstName"
					value={form.firstName}
					onChange={handleChange}
					id="first-name"
					required
					autoFocus
				/>
				<label htmlFor="last-name">Last Name</label>
				<input
					type="text"
					name="lastName"
					value={form.lastName}
					onChange={handleChange}
					id="last-name"
				/>
				<label htmlFor="from">Email</label>
				<input
					type="email"
					name="from"
					value={form.from}
					onChange={handleChange}
					id="from"
					required
				/>
				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					name="subject"
					value={form.subject}
					onChange={handleChange}
					id="subject"
					required
				/>
				<label htmlFor="phone-number">Phone</label>
				<input
					type="number"
					name="phoneNumber"
					value={form.phoneNumber}
					onChange={handleChange}
					id="phone-number"
				/>
				<textarea
					rows={10}
					name="message"
					value={form.message}
					onChange={handleChange}
					id=""
					required
					placeholder="Your message..."></textarea>
				<input
					type="checkbox"
					name="agreedTerms"
					onChange={handleCheckboxChange}
					checked={form.agreedTerms}
					id="agreed-terms"
				/>
				<p>Check here if you accept this terms and conditions.</p>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}
