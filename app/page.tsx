import Button from '@/components/Button';
import Hero from '@/components/Hero';
import PageWrapper from '@/components/PageWrapper';
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
	return (
		<PageWrapper>
			<Hero />
			<WhatWeDo />
		</PageWrapper>
	);
}
