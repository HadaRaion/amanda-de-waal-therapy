import Button from '@/components/Button';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
	return (
		<PageWrapper>
			<section className="">
				<p className="link">Main page</p>

				<Button href="/services" label="SEE DETAIL" />
			</section>
		</PageWrapper>
	);
}
