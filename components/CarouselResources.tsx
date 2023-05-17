import { getFeaturedResources } from '@/services/resources';

export default async function CarouselResources() {
	const resources = await getFeaturedResources();
	return (
		<section>
			{resources.map(resource => (
				<p key={resource.path}>{resource.title}</p>
			))}
		</section>
	);
}
