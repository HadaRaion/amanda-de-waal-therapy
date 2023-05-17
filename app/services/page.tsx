import PageWrapper from '@/components/PageWrapper';
import PageTitle from '@/components/PageTitle';
import Banner from '@/components/Banner';

export default function ServicesPage() {
	return (
		<PageWrapper>
			<PageTitle title="Services" />
			<Banner
				sentence1="I reserve a small number of spots on my caseload for children ages 2-12 who are in need of play and sandtray therapy to work through attachment and trauma related difficulties. If you are seeking this support for a child in your care, please reach out"
				image={{ href: '/images/sand.jpg', alt: 'A sand tray' }}
				link={{ label: 'Get in touch', href: '/contact' }}
			/>
		</PageWrapper>
	);
}
