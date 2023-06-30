import './globals.css';
import { Mulish, Philosopher } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mulish = Mulish({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mulish',
});

const philosopher = Philosopher({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-philosopher',
});

export const metadata = {
	metadataBase: new URL('https://www.amandadewaaltherapy.com/'),
	title: 'Amanda de Waal Therapy',
	description:
		'Abbotsford Registered Clinical Counsellor. Counselling that offers a space for individuals to be safe, seen and known. Specializing in trauma, depression, PTSD, and grief.',
	keywords: [
		'Amanda de Waal',
		'Amanda de Waal Therapy',
		'Abbotsford Counsellor',
		'Registered Clinical Counsellor',
		'Woman Counsellor',
		'Counselling',
	],
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${mulish.variable} ${philosopher.variable} flex flex-col w-full font-sans bg-light font-light selection:bg-dark/60 selection:text-light`}>
				<Header />
				<main className="grow pt-20">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
