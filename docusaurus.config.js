const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Stardust XR",
	tagline: "Stardust... We Fight For the Users!",
	url: "https://stardustxr.org",
	baseUrl: "/",
	trailingSlash: false,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "StardustXR", // Usually your GitHub org/user name.
	projectName: "website", // Usually your repo name.
	scripts: [{src: 'https://plausible.io/js/script.hash.outbound-links.js', defer: true, 'data-domain': 'stardustxr.org'}],
	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],
	themeConfig: {
		colorMode: {
			defaultMode: "dark",
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		navbar: {
			title: "Stardust XR",
			logo: {
				alt: "Stardust XR logo, a yellow astroid with smaller white astroids around it",
				src: "img/icon.webp",
			},
			items: [
				{
					href: "https://twitter.com/stardustxr",
					label: "Twitter",
					position: "right",
				},
				{
					href: "https://discord.gg/A9w7fKE",
					label: "Discord",
					position: "right",
				},
				{
					href: "https://matrix.to/#/#stardustxr:matrix.org",
					label: "Matrix",
					position: "right",
				},
				{
					href: "https://github.com/StardustXR",
					label: "GitHub",
					position: "right",
				},
				{
					href: "https://github.com/sponsors/technobaboo",
					label: "Sponsor This",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Getting Started",
							to: "/docs/get-started/setup-openxr",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discord.gg/A9w7fKE",
						},
						{
							label: "Matrix",
							href: "https://matrix.to/#/#stardustxr:matrix.org",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/stardustxr",
						},
						{
							label: "Stardust XR (GitHub)",
							href: "https://github.com/StardustXR",
						},
						{
							label: "Sponsor This",
							href: "https://github.com/sponsors/technobaboo",
						},
					],
				},
				{
					title: "Code",
					items: [
						{
							label: "Stardust XR (Server)",
							href: "https://github.com/StardustXR/stardust-xr-server",
						},
						{
							label: "stardust-xr (includes Fusion)",
							href: "https://github.com/StardustXR/stardust-xr",
						},
						{
							label: "Flatland",
							href: "https://github.com/StardustXR/flatland",
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
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/StardustXR/website/edit/main/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
