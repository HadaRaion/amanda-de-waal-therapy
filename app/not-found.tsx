import Button from '@/components/Button';
import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';
import PageWrapper from '@/components/PageWrapper';

export default function NotFound() {
	return (
		<>
			<PageTitle title="Page Not Found" />
			<PageWrapper>
				<Container className="flex flex-col items-center justify-center py-32 lg:py-36">
					<p className="mb-10">
						Sorry, the page you are looking for does not exist.
					</p>
					<Button href="/" label="Go back to Home" />
				</Container>
			</PageWrapper>
		</>
	);
}
