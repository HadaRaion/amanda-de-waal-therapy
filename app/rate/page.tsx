import { getInstagramFeed } from '@/services/instagram';
import PageTitle from '@/components/PageTitle';
import Container from '@/components/Container';
import Rate from '@/components/Rate';
import Instagram from '@/components/Instagram';

export default async function RatePage() {
	const feed = await getInstagramFeed(6);

	return (
		<div>
			<PageTitle title="Rate & Insurance" />
			<section className="py-32 lg:py-36">
				<Container>
					<p className="lg:w-2/3 xl:w-1/2">
						The session fee is due at the end of session, and can be paid by
						e-transfer, cash, or credit card.
						<br />
						MSP will not cover the fees of your session, and my services are
						currently not covered by extended benefits. I have met all BCACC
						requirements for registration and am in the process of receiving my
						RCC (registered clinical counsellor) designation. That process will
						be complete in the next few months, which will result in having my
						services covered by most extended benefits.
					</p>
				</Container>
			</section>
			<Rate />
			<Instagram feed={feed} />
		</div>
	);
}
