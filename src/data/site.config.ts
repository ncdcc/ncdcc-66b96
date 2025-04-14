interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://ncdcc.netlify.app/', // Write here your website url
	author: 'your_ncdcc_cadet', // Site author
	title: 'NCDCC 101', // Site title.
	description: 'Tips, tricks, experiences from a your_ncdcc_cadet!', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
