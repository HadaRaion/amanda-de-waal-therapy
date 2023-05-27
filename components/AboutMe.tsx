'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
	{ src: '/images/01_amanda.jpg', alt: 'Amanda profile' },
	{ src: '/images/02_kid.jpg', alt: 'Amanda when she was 6 years old' },
	{ src: '/images/03_bc.jpg', alt: 'Canim lake sunset' },
	{ src: '/images/04_fire.jpg', alt: 'Having fire on the beach' },
	{
		src: '/images/05_outdoors.jpg',
		alt: 'Amanda is standing on the cliff with big smile',
	},
	{
		src: '/images/06_sun.jpg',
		alt: 'Amanda is enjoying the sunshine on her face',
	},
	{ src: '/images/07_coffee.jpg', alt: 'Amanda is having coffee in peace' },
];

export default function AboutMe() {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((currentImage + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentImage]);

	const highlightAnim = (index: Number) =>
		currentImage === index ? 'bg-[0_0]' : 'bg-[100%_0]';

	return (
		<section className="flex flex-col lg:flex-row gap-14 border-b border-black">
			<div className="xs:min-h-[500px] min-h-[550px] sm:min-h-[600px] lg:w-2/5 mx-5 sm:mx-8 pt-32 lg:pt-36 lg:pb-36 lg:border-r flex items-center justify-center relative">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute border duration-1000 ease ${
							index === currentImage ? 'opacity-100' : 'opacity-0'
						}`}>
						<Image
							src={image.src}
							width={400}
							height={500}
							alt={image.alt}
							priority
						/>
					</div>
				))}
			</div>
			<div className="lg:w-3/5 ml-5 sm:ml-8 lg:ml-0 mr-5 sm:mr-8 lg:mr-12 2xl:mr-16 pb-32 lg:py-36 flex flex-col justify-between">
				<p className="xl:w-3/5">
					My name is{' '}
					<span className={`highlight ${highlightAnim(0)}`}>
						Amanda (she/her)
					</span>
					, and I am a clinical{' '}
					<span className={`highlight ${highlightAnim(0)}`}>counsellor</span>,
					who has found herself in many different roles over the years, all with
					the desire of creating places of belonging and safety for all people
					in this world.
				</p>
				<br />
				<br />

				<p>
					It’s helpful to get a feel for what a therapist is like before you
					decide to meet with them. So, let me tell you a bit about myself. I am
					the{' '}
					<span className={`highlight ${highlightAnim(1)}`}>
						second youngest of 6 kids
					</span>
					, and grew up on the{' '}
					<span className={`highlight ${highlightAnim(2)}`}>
						West Coast of BC
					</span>
					, which I still call home. Whenever it’s not raining you can find me{' '}
					<span className={`highlight ${highlightAnim(3)}`}>
						on a beach having a fire
					</span>
					, or sitting up high somewhere admiring a good view. I feel most alive
					with the sun on my face, surrounded by my people. I{' '}
					<span className={`highlight ${highlightAnim(4)}`}>
						love being outdoors
					</span>
					, and especially love swimming in any body of water I can find. I’d
					argue that one of the best feelings in the world is a midday nap,
					outside, with the{' '}
					<span className={`highlight ${highlightAnim(5)}`}>
						sun coating my body
					</span>
					. I thrive on{' '}
					<span className={`highlight ${highlightAnim(6)}`}>good coffee</span>{' '}
					(probably too much coffee), and my nalgene full of lemon water. I
					enjoy laughing until my abs hurt, and will shamelessly claim that I
					think my jokes are the funniest. I identify as an HSP (highly
					sensitive person) who is neurodivergent, and although those labels
					come with significant challenges, I think they also give me
					superpowers.
				</p>
			</div>
		</section>
	);
}
