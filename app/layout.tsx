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

	description: '헬로',
	icons: {
		icon: '/favicon.ico',
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
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
