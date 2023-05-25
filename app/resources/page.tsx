import {
	getBookResourcesForAdult,
	getBookResourcesForAll,
	getPodcastResources,
} from '@/services/resources';
import { getInstagramFeed } from '@/services/instagram';
import Instagram from '@/components/Instagram';
import PageTitle from '@/components/PageTitle';
import ResourceList from '@/components/ResourceList';
import PageWrapper from '@/components/PageWrapper';

export default async function ResourcesPage() {
	const adultList = await getBookResourcesForAdult();
	const allList = await getBookResourcesForAll();
	const podcastList = await getPodcastResources();
	const feed = await getInstagramFeed(6);

	return (
		<>
			<PageTitle title="Resources" />;
			<PageWrapper>
				<ResourceList title="Books for Adults" list={adultList} />
				<ResourceList
					title="Books for Children and Adults"
					list={allList}
					squareImage
				/>
				<ResourceList title="Podcasts" list={podcastList} squareImage />
				<Instagram feed={feed} />
			</PageWrapper>
		</>
	);
}
