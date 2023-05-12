'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';

const links = [
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/rate', label: 'Rate' },
	{ href: '/resources', label: 'Resources' },
	{ href: '/contact', label: 'contact' },
];

const Header = () => {
	const path = usePathname();

	return (
		<header className="border-b border-black">
			<Container className="flex justify-between items-center h-20">
				<Link className="mt-1" href="/">
					<h1 className="sr-only">Amanda de Waal Therapy</h1>
					<Image src="/logo.svg" width={230} height={26} alt="logo" priority />
				</Link>

				<nav>
					<ul className="flex gap-10">
						{links.map(link => (
							<li key={link.href}>
								<Link className="relative link" href={link.href}>
									{link.href === path && (
										<motion.span
											layoutId="underline"
											className="block absolute left-0 top-full h-[1px] w-[calc(100%-2px)] bg-black"
										/>
									)}

									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
