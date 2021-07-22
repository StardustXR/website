const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Stardust XR',
	tagline: 'We Fight for the Users!',
	url: 'https://stardustxr.org',
	baseUrl: '/',
	trailingSlash: false,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'StardustXR', // Usually your GitHub org/user name.
	projectName: 'website', // Usually your repo name.
	themeConfig: {
		colorMode: {
			defaultMode: "dark",
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		navbar: {
			title: 'Stardust XR',
			logo: {
				alt: 'Stardust XR logo, a yellow astroid with smaller white astroids around it',
				src: 'img/icon.webp',
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Docs',
				},
				{
					href: 'https://twitter.com/stardustxr',
					label: 'Twitter',
					position: 'right',
				},
				{
					href: 'https://discord.gg/qwxuwRrbP5',
					label: 'Discord',
					position: 'right',
				},
				{
					href: 'https://github.com/technobaboo/stardust-xr',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Protocol',
							to: '/docs/stardust-protocol/protocol',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Discord',
							href: 'https://discord.gg/qwxuwRrbP5',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/stardustxr',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/technobaboo/stardust-xr',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Nova King`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/StardustXR/website/edit/main/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
