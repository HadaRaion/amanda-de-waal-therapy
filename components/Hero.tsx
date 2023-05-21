import Image from 'next/image';
import Container from './Container';

export default function Hero() {
	return (
		<section className="py-12 border-b border-black">
			<Container className="flex flex-col md:flex-row gap-8 md:gap-12">
				<div className="lg:w-2/5">
					<Image
						src="/images/profile-01.jpg"
						alt="Picture of the therapist"
						width={610}
						height={630}
						priority
						className="border border-black"
					/>
				</div>
				<div className="lg:w-3/5 flex flex-col justify-center">
					<h2 className="font-serif text-3xl leading-snug lg:text-4xl xl:text-5xl xl:leading-tight">
						<span className="br">This journey may be your own, </span>
						but I want to join you in that journey.
					</h2>
					<p className="mt-8 xl:w-4/5">
						My name is Amanda (she/her), and I am a clinical counsellor, who has
						found herself in many different roles over the years, all with the
						desire of creating places of belonging and safety for all people in
						this world.
					</p>
				</div>
			</Container>
		</section>
	);
}
