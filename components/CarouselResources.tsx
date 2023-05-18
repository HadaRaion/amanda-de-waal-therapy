import { getFeaturedResources } from '@/services/resources';
import Image from 'next/image';
import MultiCarousel from './MultiCarousel';

export default async function CarouselResources() {
	const resources = await getFeaturedResources();
	return (
		<section className="flex flex-col md:flex-row border-y border-black md:items-end gap-16 md:gap-20 py-32 md:py-0">
			<h2 className="md:py-32 lg:py-36 link md:w-1/4 text-center md:text-right">
				My Resources
			</h2>
			<MultiCarousel>
				{resources.map(resource => (
					<div
						key={resource.path}
						className="aspect-[2/3] relative before:absolute before:z-10 before:inset-0 before:bg-light/30 border border-black">
						<Image
							src={`/images/resources/${resource.path}.jpg`}
							alt={`Cover image of ${resource.title}`}
							fill
							// width="0"
							// height="0"
							// sizes="100vw"
							// className="w-full h-auto"
						/>
					</div>
				))}
			</MultiCarousel>
		</section>
	);
}
