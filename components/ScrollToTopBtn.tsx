'use client';

import {
	Variants,
	useAnimationControls,
	useScroll,
	motion,
} from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollToTopContainerVariants: Variants = {
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

	const scrollToTop = () => {
		if (!isBrowser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<motion.button
			className="fixed z-40 bottom-4 right-4 lg:bottom-10 lg:right-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full border bg-primary hover:bg-dark hover:text-light duration-500 ease link"
			variants={ScrollToTopContainerVariants}
			initial="hide"
			animate={controls}
			onClick={scrollToTop}>
			<span className="ml-[2px] lg:ml-[3px]">TOP</span>
		</motion.button>
	);
}
