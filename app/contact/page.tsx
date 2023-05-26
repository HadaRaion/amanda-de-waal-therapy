import { getInstagramFeed } from '@/services/instagram';
import Banner from '@/components/Banner';
import ContactForm from '@/components/ContactForm';
import Instagram from '@/components/Instagram';
import PageTitle from '@/components/PageTitle';
import PageWrapper from '@/components/PageWrapper';

export default async function ContactPage() {
	const feed = await getInstagramFeed(6);

	return (
		<>
			<PageTitle title="Contact" />
			<PageWrapper>
				<ContactForm />
				<Banner
					sentence1="If you require urgent support, do not wait for a reply via e-mail."
					sentence2="If you’re in distress or suicidal, contact The Crisis Intervention & Suicide Prevention Centre of BC at 604-872-3311, 1-800-suicide (1-800-784-2433), or dial 911."
				/>
				<hr />
				<Instagram feed={feed} />
			</PageWrapper>
		</>
	);
}
