import Instagram from '@/components/Instagram';
import PageTitle from '@/components/PageTitle';
import ResourceList from '@/components/ResourceList';
import {
	getBookResourcesForAdult,
	getBookResourcesForAll,
	getPodcastResources,
} from '@/services/resources';

export default async function ResourcesPage() {
	const adultList = await getBookResourcesForAdult();
	const allList = await getBookResourcesForAll();
	const podcastList = await getPodcastResources();

	return (
		<div>
			<PageTitle title="Resources" />;
			<ResourceList title="Books for Adults" list={adultList} />
			<ResourceList
				title="Books for Children and Adults"
				list={allList}
				squareImage
			/>
			<ResourceList title="Podcasts" list={podcastList} squareImage />
			<Instagram />
		</div>
	);
}
