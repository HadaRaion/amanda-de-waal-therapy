'use client';

import { sendContactEmail } from '@/services/contact';
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import FormBanner from './FormBanner';
import TermsModal from './TermsModal';

type Form = {
	firstName: string;
	lastName?: string;
	from: string;
	subject?: string;
	phoneNumber?: number;
	message: string;
	agreedTerms?: boolean;
};

const DEFAULT_DATA = {
	firstName: '',
	lastName: '',
	from: '',
	subject: '',
	phoneNumber: undefined,
	message: '',
	agreedTerms: false,
};

type BannerData = {
	message: string;
	state: 'success' | 'error';
};

export default function ContactForm() {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);
	const [formBanner, setFormBanner] = useState<BannerData | null>(null);
	const [showTermsModal, setShowTermsModal] = useState(false);

	showTermsModal
		? document.body.classList.add('lock-screen')
		: document.body.classList.remove('lock-screen');

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
		sendContactEmail(form) //
			.then(() => {
				setFormBanner({
					message: 'Your message has been sent successfully',
					state: 'success',
				});
				setForm(DEFAULT_DATA);
			})
			.catch(error => {
				setFormBanner({
					message:
						'There was an error sending your message. Please check the form and try again',
					state: 'error',
				});
			})
			.finally(() => {
				setTimeout(() => {
					setFormBanner(null);
				}, 5000);
			});
	};

	const handleCloseModal = () => setShowTermsModal(false);

	return (
		<section className="flex flex-col md:flex-row border-b border-black">
			<p
				className="md:w-[20rem] lg:w-[34rem] ml-5 sm:ml-8 lg:ml-12 2xl:ml-16 mr-5 sm:mr-8 md:mr-0 
				md:pr-5 lg:pr-12 2xl:pr-16 pt-7 pb-10 md:pb-0
				md:border-r border-black">
				Do you want to learn more about our therapy sessions? Feel free to give
				me a call or complete the form. <br /> <br />
				Wanting to connect, or have any questions? Feel free to complete this
				form, and I’ll respond as soon as I’m able.
			</p>
			<form className="contact-form flex flex-col grow" onSubmit={handleSubmit}>
				<div className="flex flex-col xl:flex-row border-b border-black border-t md:border-t-0">
					<div className="xl:w-1/2 flex items-center  border-b xl:border-none lg:border-black">
						<label htmlFor="first-name">First Name *</label>
						<input
							className="grow mr-5 sm:mr-8 lg:mr-12 xl:mr-0"
							type="text"
							name="firstName"
							value={form.firstName}
							onChange={handleChange}
							id="first-name"
							required
						/>
					</div>
					<div className="xl:w-1/2 flex items-center mr-5 sm:mr-8 lg:mr-12 2xl:mr-16">
						<label htmlFor="last-name">Last Name</label>
						<input
							className="grow"
							type="text"
							name="lastName"
							value={form.lastName}
							onChange={handleChange}
							id="last-name"
						/>
					</div>
				</div>

				<div className="flex items-center border-b border-black">
					<label htmlFor="from">Email *</label>
					<input
						className="grow mr-5 sm:mr-8 lg:mr-12 2xl:mr-16"
						type="email"
						name="from"
						value={form.from}
						onChange={handleChange}
						id="from"
						required
					/>
				</div>
				<div className="flex items-center border-b border-black">
					<label htmlFor="subject">Subject *</label>
					<input
						className="grow mr-5 sm:mr-8 lg:mr-12 2xl:mr-16"
						type="text"
						name="subject"
						value={form.subject}
						onChange={handleChange}
						id="subject"
						required
					/>
				</div>
				<div className="flex items-center border-b border-black">
					<label htmlFor="phone-number">Phone</label>
					<input
						className="grow mr-5 sm:mr-8 lg:mr-12 2xl:mr-16"
						type="tel"
						name="phoneNumber"
						value={form.phoneNumber}
						onChange={handleChange}
						id="phone-number"
					/>
				</div>

				<div className="flex border-b border-black">
					<label htmlFor="message" className="pt-6">
						Message *
					</label>
					<textarea
						className="grow mr-5 sm:mr-8 lg:mr-12 2xl:mr-16 pt-6"
						rows={10}
						name="message"
						value={form.message}
						onChange={handleChange}
						id="message"
						required
						placeholder="Your message..."></textarea>
				</div>
				<div className="h-20 flex items-center">
					<input
						className="mr-5 sm:mr-8 lg:mr-12 2xl:mr-16"
						type="checkbox"
						name="agreedTerms"
						onChange={handleCheckboxChange}
						checked={form.agreedTerms}
						required
						id="agreed-terms"
					/>
					<p className="grow mr-5 sm:mr-8 lg:mr-12 2xl:mr-16">
						* Check here if you accept this{' '}
						<a
							className="border-b border-black cursor-pointer"
							onClick={() => setShowTermsModal(true)}>
							terms and conditions
						</a>
						.
					</p>
				</div>

				<div className="flex flex-col xl:flex-row items-center py-5 border-t border-black">
					{formBanner && (
						<FormBanner
							className="sm:mx-8 md:mx-10 mb-5 xl:mb-0"
							message={formBanner.message}
						/>
					)}
					<SubmitButton
						label="Send message"
						className="ml-5 sm:ml-8 lg:ml-12 xl:ml-auto mr-5 sm:mr-8 lg:mr-12 2xl:mr-16"
					/>
				</div>
			</form>
			<TermsModal visible={showTermsModal} onClose={handleCloseModal} />
		</section>
	);
}
