'use client';

import {
	Variants,
	useAnimationControls,
	useScroll,
	motion,
} from 'framer-motion';
import { useState, useEffect } from 'react';

const BookingBtnVariants: Variants = {
	hide: { opacity: 0 },
	show: { opacity: 1 },
};

export default function ScrollToTopBtn() {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	useEffect(() => {
		return scrollYProgress.on('change', latestValue => {
			if (latestValue > 0.1) {
				controls.start('show');
			} else {
				controls.start('hide');
			}
		});
	}, [scrollYProgress, controls]);

	const isBrowser = () => typeof window !== 'undefined';

	return (
		<motion.a
			className="fixed z-40 bottom-4 right-4 lg:bottom-10 lg:right-10 w-14 h-14 lg:w-[90px] lg:h-[90px] rounded-full border border-dark bg-dark text-light hover:bg-primary  hover:text-dark duration-500 ease flex justify-center items-center link"
			variants={BookingBtnVariants}
			initial="hide"
			animate={controls}
			href="https://amandadewaaltherapy.janeapp.com/#staff_member/1"
			target="_blank"
			title="Go to booking site in new tab">
			<span className="block p-2 mt-[1px] ml-[1px] text-center">Book now</span>
		</motion.a>
	);
}
