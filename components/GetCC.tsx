import Container from './Container';
import GetComplimentaryConsultationForm from './GetCCForm';

export default function GetComplimentaryConsultation() {
	return (
		<section className="py-32 lg:py-36 border-t border-black">
			<Container className="flex flex-col items-center">
				<h2 className="font-serif text-3xl leading-snug lg:text-4xl xl:text-5xl xl:leading-tight mt-12 text-center">
					Complimentary Consultation
				</h2>
				<p className="mt-8 mb-20 text-center xl:w-3/5 ">
					<span className="br">
						Finding the support that feels best to you can sometimes feel like a
						strenuous process.{' '}
					</span>
					<span className="br">
						It’s important that you can get a bit of a feel for who I am, and
						how I show up, before deciding to work with me.{' '}
					</span>
					Please reach out, so we can find a time to connect!
				</p>
				<GetComplimentaryConsultationForm className="md:w-3/5" />
			</Container>
		</section>
	);
}
