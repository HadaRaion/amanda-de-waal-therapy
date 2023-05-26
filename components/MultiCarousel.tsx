'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 8,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 7,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
	},
};

type Props = {
	children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
	return (
		<>
			<Carousel
				infinite
				responsive={responsive}
				arrows={false}
				autoPlay
				itemClass="mx-4 md:mx-8"
				containerClass="md:py-32 lg:py-36 md:w-3/4 border-l border-black">
				<>{children}</>
			</Carousel>
		</>
	);
}
