import Container from '@/components/Container';
import Instagram from '@/components/Instagram';
import PageTitle from '@/components/PageTitle';
import Rate from '@/components/Rate';

export default function RatePage() {
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
			<Instagram />
		</div>
	);
}
