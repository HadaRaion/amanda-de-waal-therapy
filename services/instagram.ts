export type instagramPost = {
	id: string;
	media_url: string;
	permalink: string;
	caption: string;
	media_type: 'VIDEO' | 'IMAGE' | 'CAROUSEL_ALBUM';
};

// Refresh long-lived-access-token
// https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-access-token}

export const getInstagramFeed = async (count: Number) => {
	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;

	const data = await fetch(url)
		.then(res => res.json())
		.then(data =>
			data.data.filter(
				(post: instagramPost) =>
					post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'
			)
		);

	const feed = data.slice(0, count);

	return feed;
};
