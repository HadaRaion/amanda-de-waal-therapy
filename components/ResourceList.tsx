import { Resource } from '@/services/resources';
import Image from 'next/image';
import Container from './Container';

type Props = {
	title: string;
	list: Resource[];
	squareImage?: boolean;
};

export default function ResourceList({ title, list, squareImage }: Props) {
	return (
		<section>
			<Container className="py-32 lg:py-36">
				<h2 className="text-2xl font-serif">{title} :</h2>
			</Container>
			<ul className="border-t border-black">
				{list.map(resource => (
					<li
						key={resource.path}
						className="group border-b border-black hover:bg-primary ease-in-out duration-300">
						<Container className="h-24 flex flex-col sm:flex-row justify-center sm:justify-normal sm:items-center">
							<div
								className={`relative h-[calc(18rem+2px)] ${
									squareImage ? 'aspect-square' : 'aspect-[2/3]'
								} hidden md:block opacity-0 group-hover:opacity-100  ease-in-out duration-300`}>
								<Image
									src={`/images/resources/${resource.path}.jpg`}
									alt="Cover"
									fill
								/>
							</div>
							<div className="sm:grow lg:ml-20 xl:ml-52">
								<a href={resource.href} target="_blank">
									{resource.title}
								</a>
							</div>
							<div className="text-dark/60 md:text-black">
								{resource.author}
							</div>
						</Container>
					</li>
				))}
			</ul>
		</section>
	);
}
