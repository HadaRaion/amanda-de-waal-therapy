'use client';

import { sendContactEmail } from '@/services/contact';
import { useState } from 'react';
import SubmitButton from './SubmitButton';

type Form = {
	firstName: string;
	from: string;
	message: string;
};

const DEFAULT_DATA = {
	firstName: '',
	from: '',
	message: '',
};

export default function GetComplimentaryConsultationForm() {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('form :>> ', form);
		sendContactEmail(form);
	};

	return (
		<form className="" onSubmit={handleSubmit}>
			<div className="flex gap-10">
				<input
					type="text"
					name="firstName"
					id="name"
					onChange={handleChange}
					placeholder="Your Name"
				/>
				<input
					type="email"
					name="from"
					id="email"
					onChange={handleChange}
					placeholder="Your e-mail"
				/>
			</div>
			<textarea
				name="message"
				id="message"
				onChange={handleChange}
				cols={30}
				rows={10}
				placeholder="Your message"></textarea>
			<SubmitButton label="Book now" />
		</form>
	);
}
