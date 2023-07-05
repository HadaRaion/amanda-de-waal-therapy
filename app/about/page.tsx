import AboutMe from '@/components/AboutMe';
import Instagram from '@/components/Instagram';
import MsgForClient from '@/components/MsgForClient';
import PageTitle from '@/components/PageTitle';
import PageWrapper from '@/components/PageWrapper';

export default function AboutPage() {
	return (
		<>
			<PageTitle title="About Me" />
			<PageWrapper>
				<AboutMe />
				<MsgForClient />
				<Instagram />
			</PageWrapper>
		</>
	);
}
