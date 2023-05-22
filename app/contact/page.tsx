import Banner from '@/components/Banner';
import ContactForm from '@/components/ContactForm';
import Instagram from '@/components/Instagram';
import PageTitle from '@/components/PageTitle';

export default function ContactPage() {
	return (
		<div>
			<PageTitle title="Contact" />
			<ContactForm />
			<Banner
				sentence1="If you require urgent support, do not wait for a reply via e-mail."
				sentence2="If you’re in distress or suicidal, contact The Crisis Intervention & Suicide Prevention Centre of BC at 604-872-3311, 1-800-suicide (1-800-784-2433), or dial 911."
			/>
			<Instagram />
		</div>
	);
}
