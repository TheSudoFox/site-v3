const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Ethan\'s Ramblings',
	dest: './public',
	themeConfig: {
    //repo: 'https://wwww.github.com',
    //repoLabel: 'Repo',
		editLinks: false,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
      { text: 'Main Site', link: 'https://ethanfox.me/' },
			{ text: 'Home', link: '/' }, 
			{ text: 'Archive', link: '/archive/' },
      //{ text: 'RSS Feed', link: '/rss.xml' }
		],
    logo: '/logo.png',
		docsDir: 'src',
		pageSize: 3,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
        site_url: 'https://blog.ethanfox.me',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.ico' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.ico' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
