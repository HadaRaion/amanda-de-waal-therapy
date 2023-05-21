const rates = [
	{ duration: '20 minutes', type: 'Phone call only', price: 'Free' },
	{ duration: '50 minutes', type: 'In Person / Virtually', price: '$120' },
	{ duration: '80 minutes', type: 'In Person / Virtually', price: '$150' },
];

export default function Rate() {
	return (
		<section>
			<ul className="flex flex-col md:flex-row border-y border-black">
				{rates.map((rate, index) => (
					<li
						key={index}
						className="md:w-1/3 flex flex-col items-center py-24 lg:py-24 mx-10 md:mx-0
            md:border-black md:border-r md:last:border-r-0 
            border-dark/30 border-b last:border-b-0 md:border-b-0 
            ">
						<h3 className="font-serif text-2xl">{rate.duration}</h3>
						<h3 className="font-serif text-2xl">Individual Counselling</h3>
						<p className="mt-2">{rate.type}</p>
						<p className="font-serif text-5xl text-dark/70 mt-14">
							{rate.price}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
