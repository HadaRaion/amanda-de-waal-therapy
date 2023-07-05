export type instagramPost = {
	id: string;
	media_url: string;
	permalink: string;
	caption: string;
	media_type: 'VIDEO' | 'IMAGE' | 'CAROUSEL_ALBUM';
};

export const getInstagramFeed = async (count: Number) => {
	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;

	const data = await fetch(url)
		.then(res => res.json())
		.then(
			data =>
				data.data &&
				data.data.filter(
					(post: instagramPost) =>
						post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'
				)
		);

	const feed = data ? data.slice(0, count) : [];

	console.log(feed);
	return feed;
};
