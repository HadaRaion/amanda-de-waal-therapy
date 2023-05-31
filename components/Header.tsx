'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos === 0);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		isMenuOpen
			? document.body.classList.add('lock-screen')
			: document.body.classList.remove('lock-screen');
	}, [isMenuOpen]);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [path]);

	const parent = {
		animate: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
	};

	const child = {
		initial: { y: '20px', opacity: 0 },
		animate: {
			y: '0px',
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 20,
			},
		},
	};

	return (
		<header
			className={`border-b border-black fixed w-full bg-light z-50 duration-300 ease-in-out ${
				showHeader ? 'top-0' : '-top-20'
			}`}>
			<Container className="flex justify-between items-center h-20">
				<Link className="mt-1 w-[230px]" href="/">
					<h1 className="sr-only">Amanda de Waal Therapy</h1>
					<Image
						src="/logo.svg"
						width="0"
						height="0"
						sizes="100vw"
						className="w-full h-auto"
						alt="logo"
						priority
					/>
				</Link>

				<nav className="hidden md:block">
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
				<div className="menu-button md:hidden">
					<button onClick={toggleMenu}>Menu</button>
				</div>
			</Container>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.nav
						initial={{ x: '100%' }}
						animate={{
							x: 0,
							transition: {
								delay: 0.5,
								type: 'spring',
								stiffness: 100,
								damping: 20,
							},
						}}
						exit={{
							x: '100%',
							transition: {
								delay: 0.5,
								type: 'spring',
								stiffness: 100,
								damping: 20,
							},
						}}
						className="mobile-menu absolute z-50 w-full h-screenHeightWithoutHeader top md:hidden bg-primary border-t border-black">
						<motion.ul
							variants={parent}
							initial="initial"
							animate="animate"
							className="h-full flex flex-col gap-20 items-center justify-center">
							{links.map(link => (
								<motion.li key={link.href} variants={child}>
									<Link className="relative mobile-menu" href={link.href}>
										{link.href === path && (
											<span className="block absolute left-0 top-full h-[1px] w-[calc(100%-2px)] bg-black" />
										)}
										{link.label}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
