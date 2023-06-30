import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.amandadewaaltherapy.com/',
			lastModified: new Date(),
		},
		{
			url: 'https://www.amandadewaaltherapy.com/about',
			lastModified: new Date(),
		},
		{
			url: 'https://www.amandadewaaltherapy.com/services',
			lastModified: new Date(),
		},
		{
			url: 'https://www.amandadewaaltherapy.com/rate',
			lastModified: new Date(),
		},
		{
			url: 'https://www.amandadewaaltherapy.com/resources',
			lastModified: new Date(),
		},
		{
			url: 'https://www.amandadewaaltherapy.com/contact',
			lastModified: new Date(),
		},
	];
}
