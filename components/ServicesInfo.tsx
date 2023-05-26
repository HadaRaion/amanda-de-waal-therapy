import Image from 'next/image';

const therapyTypes = [
	'Internal Family Systems',
	'Somatic Based Therapy',
	'Emotional Focused Therapy',
	'Experiential Therapy',
	'Attachment Based Therapy',
	'Trauma Informed Therapy',
	'PolyVagal Theory',
	'Play Therapy & Sand Tray Therapy',
];

export default function ServicesInfo() {
	return (
		<section className="flex flex-col lg:flex-row border-b border-black">
			<div className="relative lg:w-1/4 hidden lg:block">
				<Image
					alt="Cozy Room for Therapy"
					src="/images/atmosphere.jpg"
					fill
					sizes="25vw"
					className="object-cover"
					quality={100}
					priority
				/>
			</div>
			<div className="flex flex-col justify-between lg:w-1/2 px-5 sm:px-8 lg:px-12 py-28 ">
				<p className="lg:w-4/5">
					There are many different ways that counsellors work, and support
					clients. For me, I specifically work with clients from a bottom-up
					approach, meaning that I find deep importance in working with feelings
					and sensations in the body, opposed to just cognitive thinking and
					ways of being. Our bodies hold our stories, and it is our bodies that
					connect us back to our wisdom and truth, moving us towards healing. My
					approach is relational and experiential, drawing from the current
					research of neuroscience, and the mind/body connection.
				</p>
				<br />
				<p>
					I pull from multiple theories and frameworks to support you in your
					journey:
				</p>
			</div>
			<ul className="lg:w-1/4 border-black border-t lg:border-t-0 lg:border-l ">
				{therapyTypes.map(therapyType => (
					<li
						key={therapyType}
						className="font-serif text-xl h-20 flex items-center pl-5 sm:pl-8 lg:pl-12 border-b border-black last:border-b-0">
						{therapyType}
					</li>
				))}
			</ul>
		</section>
	);
}
