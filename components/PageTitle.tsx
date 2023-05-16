'use client';

import { motion } from 'framer-motion';

export type Props = {
	title: string;
};

const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const letter = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
	},
};

const line = {
	hidden: { width: 0, opacity: 0 },
	visible: {
		width: '100%',
		opacity: 1,
		transition: {
			delay: 0,
			duration: 0.8,
		},
	},
};

export default function PageTitle({ title }: Props) {
	return (
		<>
			<section className="py-32">
				<motion.h2
					className="font-serif text-5xl font-normal text-center"
					variants={sentence}
					initial="hidden"
					animate="visible">
					{title.split('').map((char, index) => {
						return (
							<motion.span key={char + '-' + index} variants={letter}>
								{char}
							</motion.span>
						);
					})}
				</motion.h2>
			</section>
			<motion.div
				className="h-[1px] bg-black"
				variants={line}
				initial="hidden"
				animate="visible"></motion.div>
		</>
	);
}
