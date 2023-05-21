'use client';
import classNames from 'classnames';
import { sendContactEmail } from '@/services/contact';
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import FormBanner from './FormBanner';

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

type BannerData = {
	message: string;
	state: 'success' | 'error';
};

export default function GetComplimentaryConsultationForm({
	className,
}: {
	className?: string;
}) {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);
	const [formBanner, setFormBanner] = useState<BannerData | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		sendContactEmail(form) //
			.then(() => {
				setFormBanner({
					message: 'Your message has been sent successfully',
					state: 'success',
				});
				setForm(DEFAULT_DATA);
			})
			.catch(() => {
				setFormBanner({
					message: 'There was an error sending your message, try again.',
					state: 'error',
				});
			})
			.finally(() => {
				setTimeout(() => {
					setFormBanner(null);
				}, 5000);
			});
	};

	return (
		<form
			className={classNames('flex flex-col w-full', className)}
			onSubmit={handleSubmit}>
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="lg:w-1/2 border-b border-black">
					<input
						className="h-12"
						type="text"
						name="firstName"
						id="name"
						onChange={handleChange}
						placeholder="Your Name"
					/>
				</div>
				<div className="lg:w-1/2 border-b border-black">
					<input
						className="h-12"
						type="email"
						name="from"
						id="email"
						onChange={handleChange}
						placeholder="Your e-mail"
					/>
				</div>
			</div>
			<div className="mt-10 border-b border-black">
				<textarea
					name="message"
					id="message"
					onChange={handleChange}
					cols={30}
					rows={10}
					placeholder="Your message"></textarea>
			</div>

			{formBanner && (
				<FormBanner
					message={formBanner.message}
					className="mt-10 text-center"
				/>
			)}

			<SubmitButton label="Book now" className="mt-10 mx-auto" />
		</form>
	);
}
