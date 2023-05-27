import Image from 'next/image';
import Container from './Container';
import ScrollToTopBtn from './ScrollToTopBtn';

const contactInfo = [
	{ label: 'phone', href: 'tel:+15874104183', value: '+1 587 410 4183' },
	{
		label: 'email',
		href: 'mailto:amandadewaaltherapy@gmail.com',
		value: 'amandadewaaltherapy@gmail.com',
	},
	{
		label: 'address',
		href: 'https://www.google.com/maps/place/Abbotsford,+BC/@49.0869277,-122.4328164,11z/data=!3m1!4b1!4m6!3m5!1s0x548435c6706ab783:0x50135152a7b0560!8m2!3d49.0504377!4d-122.3044697!16zL20vMDFnYzFf',
		value: 'Abbotsford, BC, Canada.',
	},
];

const workingHours = [
	{ day: 'Weekdays', hours: '10am - 6pm' },
	{ day: 'Saturday', hours: '10am - 3pm' },
	{ day: 'Sunday', hours: 'closed' },
];

const socialLinks = [
	{ href: 'mailto:amandadewaaltherapy@gmail.com', label: 'Email' },
	{ href: 'https://www.instagram.com/amandadewaaltherapy', label: 'Instagram' },
	{
		label: 'Booking',
		href: 'https://amandadewaaltherapy.janeapp.com/#staff_member/1',
	},
];

export default function Footer() {
	return (
		<footer className="border-t border-black">
			<Container className="flex flex-col md:flex-row justify-between items-center  py-20">
				<div className="xl:w-1/4">
					<h1 className="sr-only">Amanda de Waal Therapy</h1>
					<Image
						className="mb-1"
						src="/logo-footer.svg"
						width={200}
						height={114}
						alt="logo"
					/>
				</div>
				<div className="xl:w-1/4  xl:pl-24 2xl:pl-32 text-center md:text-left mt-14 md:mt-0">
					<h4 className="font-serif text-2xl mb-7">Contact</h4>
					<ul>
						{contactInfo.map(({ label, href, value }) => (
							<li key={label} className="text-xs  mb-3">
								<a href={href} target="_blank">
									{value}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="xl:w-1/4  xl:pl-24 2xl:pl-32 text-center md:text-left mt-14 md:mt-0">
					<h4 className="font-serif text-2xl mb-7">Open Hours</h4>
					<ul>
						{workingHours.map(({ day, hours }) => (
							<li key={day} className="text-xs mb-3">
								{day}: {hours}
							</li>
						))}
					</ul>
				</div>
				<div className="xl:w-1/4  xl:pl-24 2xl:pl-32 text-center md:text-left mt-14 md:mt-0">
					<h4 className="font-serif text-2xl mb-7">Social</h4>
					<ul>
						{socialLinks.map(({ href, label }) => (
							<li key={label} className="text-xs mb-3">
								<a href={href} target="_blank">
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</Container>

			<p className="border-t border-black text-center text-sm py-6">
				© 2023 AMANDA DE WAAL THERAPY.{' '}
				<span className="mobile-br mt-1 sm:mt-0">All Rights Reserved.</span>
			</p>
			<ScrollToTopBtn />
		</footer>
	);
}
