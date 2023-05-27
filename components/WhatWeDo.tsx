import Button from './Button';
import Container from './Container';

export default function WhatWeDo() {
	return (
		<section className="relative bg-primary text-center py-32 lg:py-36 overflow-hidden branch-bg">
			<Container className="flex flex-col items-center relative z-10">
				<p className="link">What I do</p>
				<h2 className="font-serif text-3xl leading-snug lg:text-4xl xl:text-5xl xl:leading-tight mt-12">
					<span className="br">
						Counselling for individuals seeking a space{' '}
					</span>
					to feel safe, seen, and known
				</h2>
				<p className="md:w-2/3 mt-6 mb-20">
					There is no “one size fits all” when it comes to therapy, which means
					that I have the honour of catering treatment to meet my clients needs,
					in ways where they have the opportunity to feel safe, seen, and known.
					My services don’t come with the intention of “fixing” you, because I
					don’t believe that you need fixing. Instead, I fully believe that you
					are already whole, and it’s your innate biological pull towards
					healing that will guide our sessions.
				</p>
				<Button href="/services" label="SEE DETAIL" darker={true} />
			</Container>
		</section>
	);
}
