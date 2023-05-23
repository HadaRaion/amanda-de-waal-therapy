import Image from 'next/image';
import Container from './Container';
import OliveBranch from './OliveBranch';

export default function MsgForClient() {
	return (
		<section className="py-32 lg:py-36 border-b border-black">
			<Container className="flex flex-col md:flex-row items-center gap-10">
				<p className="md:w-1/2 order-last md:order-first">
					Life has brought me to many places. As I have journeyed, I have seen
					time and time again that we as beings have the ability to heal. And,
					when we heal, there is greater opportunity for those around us to heal
					as well. We thrive in the places where we are loved, supported, and
					safe to show up just as we are. I don’t have it all together, and will
					never pretend that I do. Instead, I boldly and proudly show up as I
					am, with all of myself, drawing from both the lived experience of
					myself and others. Throughout my journey through life, I have
					accumulated many different labels to describe my physical and mental
					health struggles. Although those labels and diagnoses don’t define me,
					they tell a story worth telling. A story of growth, and hope in the
					places I did not see possible. I feel a deep desire to create spaces
					where people have access to the same healing and support that I have
					accessed and still access in my life. I would love to be the person
					that sees you and affirms you in your pursuit of growth and healing.
					You are worth holding space for, and your journey holds the same value
					that mine does. I feel most embodied when I get to show up fully as I
					am, and sit with others fully as they are. My goal is to show up
					authentically with you, and I hope that by letting you see me as I am,
					you will feel safe to show up fully as you are.
					<br />
					<br />
					This journey may be your own, but I want to join you in that journey.
				</p>
				<div className="md:w-1/2 flex items-center justify-center">
					<OliveBranch fill="#DEDBD1" width="25%" height="auto" />
				</div>
			</Container>
		</section>
	);
}
