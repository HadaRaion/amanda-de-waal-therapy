import Image from 'next/image';

export default function AboutMe() {
	return (
		<section className="flex flex-col lg:flex-row gap-14 border-b border-black">
			<div className="lg:w-2/5 mx-5 sm:mx-8 pt-32 lg:pt-36 lg:pb-36 lg:border-r flex items-center justify-center">
				<Image
					src={`/images/01_amanda.jpg`}
					width={400}
					height={500}
					alt="Jo"
				/>
			</div>
			<div className="lg:w-3/5 ml-5 sm:ml-8 lg:ml-0 mr-5 sm:mr-8 lg:mr-12 2xl:mr-16 pb-32 lg:py-36 flex flex-col justify-between">
				<p className="xl:w-3/5">
					My name is Amanda (she/her), and I am a clinical counsellor, who has
					found herself in many different roles over the years, all with the
					desire of creating places of belonging and safety for all people in
					this world.
				</p>
				<br />
				<p>
					It’s helpful to get a feel for what a therapist is like before you
					decide to meet with them. So, let me tell you a bit about myself. I am
					the second youngest of 6 kids, and grew up on the West Coast of BC,
					which I still call home. Whenever it’s not raining you can find me on
					a beach having a fire, or sitting up high somewhere admiring a good
					view. I feel most alive with the sun on my face, surrounded by my
					people. I love being outdoors, and especially love swimming in any
					body of water I can find. I’d argue that one of the best feelings in
					the world is a midday nap, outside, with the sun coating my body. I
					thrive on good coffee (probably too much coffee), and my nalgene full
					of lemon water. I enjoy laughing until my abs hurt, and will
					shamelessly claim that I think my jokes are the funniest. I identify
					as an HSP (highly sensitive person) who has ADHD, and I think those
					two labels give me superpowers.
				</p>
			</div>
		</section>
	);
}
