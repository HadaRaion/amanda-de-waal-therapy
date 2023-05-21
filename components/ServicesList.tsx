const services = [
	'Chronic Pain and Illness',
	'Eating Disorders',
	'Complex PTSD',
	'PTSD',
	'Grief',
	'Complex Trauma',
	'Childhood Trauma',
	'Sexual Violence and Abuse',
	'Faith Deconstruction',
	'Religious Trauma and Abuse',
	'Obsessive Compulsive Disorder',
	'Depression',
	'Anxiety',
	'Gender and Sexual Identity',
];

export default function ServicesList() {
	return (
		<section className="flex flex-col md:flex-row border-y border-black">
			<div className="md:w-1/4 px-5 sm:px-8 md:px-12 py-28 md:py-8 border-b md:border-b-0 md:border-r border-black">
				<p className="link text-right">WHAT WE SUPPORT</p>
			</div>
			<ul className="grow grid grid-cols-1 md:grid-cols-2">
				{services.map((service, index) => (
					<li
						key={index}
						className="font-serif text-xl h-20 flex items-center pl-5 sm:pl-8 md:pl-12 
            border-b border-black last:border-b-0 md:[&:nth-child(13)]:border-b-0">
						{service}
					</li>
				))}
			</ul>
		</section>
	);
}
