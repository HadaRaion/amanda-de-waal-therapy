import Container from './Container';
import GetComplimentaryConsultationForm from './GetCCForm';

export default function GetComplimentaryConsultation() {
	return (
		<section className="py-32 lg:py-36 border-t border-black">
			<Container className="flex flex-col items-center">
				<h2 className="font-serif text-3xl leading-snug lg:text-4xl xl:text-5xl xl:leading-tight mt-12">
					Get Complimentary Consultation
				</h2>
				<p className="mt-3 mb-20">
					We offer a free 20 minute phone consultation to those seeking out my
					services
				</p>
				<GetComplimentaryConsultationForm />
			</Container>
		</section>
	);
}
