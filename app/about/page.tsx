import AboutMe from '@/components/AboutMe';
import Instagram from '@/components/Instagram';
import MsgForClient from '@/components/MsgForClient';
import PageTitle from '@/components/PageTitle';
import PageWrapper from '@/components/PageWrapper';
import { getInstagramFeed } from '@/services/instagram';

export default async function AboutPage() {
	const feed = await getInstagramFeed(6);

	return (
		<>
			<PageTitle title="About Me" />
			<PageWrapper>
				<AboutMe />
				<MsgForClient />
				<Instagram feed={feed} />
			</PageWrapper>
		</>
	);
}
