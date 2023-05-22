import Image from 'next/image';
import Container from './Container';
import Button from './Button';

type Props = {
	sentence1: string;
	sentence2?: string;
	spaceBetweenSentences?: boolean;
	image?: {
		href: string;
		alt: string;
	};
	link?: {
		label: string;
		href: string;
	};
};

export default function Banner({
	sentence1,
	sentence2,
	spaceBetweenSentences,
	image,
	link,
}: Props) {
	return (
		<section className="bg-primary text-center py-32 lg:py-36">
			<Container className="flex flex-col items-center">
				{image ? (
					<div className="relative w-32 lg:w-48 h-32 lg:h-48 mb-10">
						<Image
							src={image.href}
							alt={image.alt}
							fill
							quality={100}
							className="object-cover"
						/>
					</div>
				) : (
					<Image
						src="/illust/olive-branch-02.svg"
						width={30}
						height={60}
						alt="A olive branch illust"
						className="mb-10"
					/>
				)}

				<p className={`lg:w-2/3 ${spaceBetweenSentences && 'mb-9'}`}>
					{sentence1}
				</p>
				{sentence2 && <p className="lg:w-2/3">{sentence2}</p>}
				{link && (
					<Button
						className="mt-24"
						href={link.href}
						label={link.label}
						darker={true}
					/>
				)}
			</Container>
		</section>
	);
}
