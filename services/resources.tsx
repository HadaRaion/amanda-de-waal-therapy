import { readFile } from 'fs/promises';
import path from 'path';

export type Resource = {
	title: string;
	author: string;
	category: string;
	href: string;
	path: string;
	featured: boolean;
};

export async function getAllResources(): Promise<Resource[]> {
	const filePath = path.join(process.cwd(), 'data', 'resources.json');
	return readFile(filePath, 'utf-8') //
		.then<Resource[]>(JSON.parse);
}

export async function getFeaturedResources(): Promise<Resource[]> {
	return getAllResources() //
		.then(resources => resources.filter(resource => resource.featured));
}

export async function getBookResourcesForAdult(): Promise<Resource[]> {
	return getAllResources() //
		.then(resources =>
			resources.filter(resource => resource.category === 'Books for Adults')
		);
}

export async function getBookResourcesForAll(): Promise<Resource[]> {
	return getAllResources() //
		.then(resources =>
			resources.filter(
				resource => resource.category === 'Books for Children and Adults'
			)
		);
}

export async function getPodcastResources(): Promise<Resource[]> {
	return getAllResources() //
		.then(resources =>
			resources.filter(resource => resource.category === 'podcast')
		);
}
