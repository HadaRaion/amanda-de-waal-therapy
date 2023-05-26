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
			className="fixed bottom-10 right-10 w-20 h-20 rounded-full border bg-primary link"
			variants={ScrollToTopContainerVariants}
			initial="hide"
			animate={controls}
			onClick={scrollToTop}>
			TOP
		</motion.button>
	);
}
