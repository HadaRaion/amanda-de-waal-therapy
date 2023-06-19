import { getInstagramFeed } from '@/services/instagram';
import PageWrapper from '@/components/PageWrapper';
import PageTitle from '@/components/PageTitle';
import Container from '@/components/Container';
import Rate from '@/components/Rate';
import Instagram from '@/components/Instagram';

export default async function RatePage() {
	const feed = await getInstagramFeed(6);

	return (
		<>
			<PageTitle title="Rates & Insurance" />
			<PageWrapper>
				<section className="py-32 lg:py-36">
					<Container>
						<p className="lg:w-2/3 xl:w-1/2">
							The session fee is due at the end of session, and can be paid by
							e-transfer, cash, or credit card.
							<br />
							MSP will not cover the fees of your session, but my services are
							often covered by extended benefit plans. Please ensure that you’ve
							checked with your insurance provider, and note that I am unable to
							bill directly to your insurer. I am able to provide receipts with
							my RCC# attached, that you may submit on your own.
						</p>
					</Container>
				</section>
				<Rate />
				<Instagram feed={feed} />
			</PageWrapper>
		</>
	);
}
