export const siteConfig = {
	name: 'Zwitscher',
	url: 'https://zwitscher.online/',
	ogImage: 'https://zwitscher.online/og.png',
	description: 'A Twitter clone for educational purposes',
	navigation: {
		about: '/about',
		auth: '/auth',
		home: '/',
		profile: '/profile',
		contact: '/contact',
		bookmarks: '/bookmarks',
		notifications: '/notifications'
	},
	external: {
		github: 'https://github.com/zwitscheronline'
	}
};

export type SiteConfig = typeof siteConfig;
