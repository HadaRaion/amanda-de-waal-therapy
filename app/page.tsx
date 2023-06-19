import Banner from '@/components/Banner';
import CarouselResources from '@/components/CarouselResources';
import GetComplimentaryConsultation from '@/components/GetCC';
import Hero from '@/components/Hero';
import PageWrapper from '@/components/PageWrapper';
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
	return (
		<PageWrapper>
			<Hero />
			<WhatWeDo />
			{/* @ts-expect-error Server Component */}
			<CarouselResources />
			<Banner
				sentence1={`I acknowledge that I live, play, and work, on the traditional and ancestral territory of the Coast Salish peoples including the Squamish, Tsleil-Waututh, Musqueam and Stó:lō Nations.`}
			/>
			<GetComplimentaryConsultation />
		</PageWrapper>
	);
}
