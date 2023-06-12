import Container from './Container';
import Image from 'next/image';
import { instagramPost } from '@/services/instagram';

export default function Instagram({ feed }: { feed: instagramPost[] }) {
	console.log('feed :>> ', feed);
	return (
		<section className="py-32 lg:py-36">
			<Container>
				<h3 className="text-2xl font-serif">
					<a
						href="https://www.instagram.com/amandadewaaltherapy/"
						target="_blank">
						@amandadewaaltherapy
					</a>
				</h3>
				{feed && (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:grid-rows-1 md:auto-rows-[0] md:overflow-y-hidden gap-4 mt-6">
						{feed.map((post: instagramPost) => (
							<a
								key={post.id}
								href={post.permalink}
								target="_blank"
								className="relative w-full aspect-square border overflow-hidden before:absolute before:z-10 before:inset-0 before:bg-light before:opacity-30 hover:before:opacity-0 before:transition before:duration-300">
								<img
									src={post.media_url}
									alt="Instagram image"
									className="w-full h-full object-cover"
								/>
							</a>
						))}
					</div>
				)}
			</Container>
		</section>
	);
}
{
	/* <Image
		src={}
		alt="Cover"
		fill
		sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
		className="object-cover"
		quality={100}
	/> */
}
