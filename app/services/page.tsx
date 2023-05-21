import PageWrapper from '@/components/PageWrapper';
import PageTitle from '@/components/PageTitle';
import Banner from '@/components/Banner';
import ServicesInfo from '@/components/ServicesInfo';
import ServicesList from '@/components/ServicesList';

export default function ServicesPage() {
	return (
		<PageWrapper>
			<PageTitle title="Services" />
			<ServicesInfo />
			<Banner sentence1="There is no “one size fits all” when it comes to therapy, which means that I have the honour of catering treatment to meet my clients needs, in ways where they get to feel safe, seen and known. My services don’t come with the intention of “fixing” you, because I don’t believe that you need fixing. Instead, I fully believe that you are already whole, and it’s your innate biological pull towards healing that will guide our sessions. " />
			<ServicesList />
			<Banner
				sentence1="I reserve a small number of spots on my caseload for children ages 2-12 who are in need of play and sandtray therapy to work through attachment and trauma related difficulties. If you are seeking this support for a child in your care, please reach out"
				image={{ href: '/images/sand.jpg', alt: 'A sand tray' }}
				link={{ label: 'Get in touch', href: '/contact' }}
			/>
		</PageWrapper>
	);
}
