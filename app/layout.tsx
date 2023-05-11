import './globals.css';
import { Mulish, Philosopher } from 'next/font/google';

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
	title: 'Amanda de Waal Therapy',
	description: '헬로',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* <body className={mulish.className}>{children}</body> */}
			<body
				className={`${mulish.variable} ${philosopher.variable} font-sans bg-light font-light`}>
				{children}
			</body>
		</html>
	);
}
