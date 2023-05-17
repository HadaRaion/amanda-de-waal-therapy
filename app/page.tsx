import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import PageWrapper from '@/components/PageWrapper';
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
	return (
		<PageWrapper>
			<Hero />
			<WhatWeDo />
			<Banner
				sentence1={`BIPOC and LGBTQ2S+ people are welcomed and supported.`}
				sentence2={`We would like to acknowledge that we are gathered on the traditional, ancestral, and unceded territory of the Coast Salish peoples including the Squamish, Tsleil-Waututh, Musqueam and Stó:lō Nations.`}
			/>
		</PageWrapper>
	);
}
