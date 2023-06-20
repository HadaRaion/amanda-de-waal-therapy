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
	title: {
		default: 'Amanda de Waal Therapy',
		template: 'Amanda de Waal Therapy | %s',
	},
	description:
		'Abbotsford Registered Clinical Counsellor. Counselling that offers a space for individuals to be safe, seen and known. Specializing in trauma, depression, PTSD, and grief.',
	icons: {
		icon: '/favicon.ico',
	},
	metadataBase: new URL('https://www.amandadewaaltherapy.com'),
	openGraph: {
		title: 'Amanda de Waal Therapy',
		description:
			'Abbotsford Registered Clinical Counsellor. Counselling that offers a space for individuals to be safe, seen and known. Specializing in trauma, depression, PTSD, and grief.',
		url: 'https://www.amandadewaaltherapy.com',
		siteName: 'Amanda de Waal Therapy',
		locale: 'en_US',
		type: 'website',
	},
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
