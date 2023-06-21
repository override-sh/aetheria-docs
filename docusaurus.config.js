// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
	title:   "Aetheria Docs",
	tagline: "The Overpowered and Extensible Open-Source Solution entirely built in typescript",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://aetheria-docs.override.sh",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	onBrokenLinks:         "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales:       [ "en" ],
	},

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs:  {
					sidebarPath:   require.resolve("./sidebars.js"),
					routeBasePath: "/",
				},
				blog:  false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
	/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
			// Replace with your project's social card
			image:  "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Aetheria Docs",
				logo:  {
					alt: "Aetheria Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type:      "docSidebar",
						sidebarId: "GettingStarted",
						position:  "left",
						label:     "Getting Started",
					},
					{
						href:     "https://github.com/override-sh/aetheria-docs",
						label:    "GitHub",
						position: "right",
					},
				],
			},
			footer:          {
				style:     "dark",
				links:     [
					{
						title: "Docs",
						items: [
							{
								label: "Getting Started",
								to:    "/getting-started",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href:  "https://stackoverflow.com/questions/tagged/aetheria",
							},
							{
								label: "Twitter",
								href:  "https://twitter.com/Overrid68880391",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Monorepo",
								href:  "https://github.com/override-sh/aetheria-docs",
							},
							{
								label: "Frontend",
								href:  "https://github.com/override-sh/aetheria-frontend",
							},
							{
								label: "Backend",
								href:  "https://github.com/override-sh/aetheria-headless",
							},
						],
					},
				],
				copyright: `Copyright © ${ new Date().getFullYear() } Override.`,
			},
			prism:           {
				theme:     lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			docs:            {
				sidebar: {
					hideable:               true,
					autoCollapseCategories: true,
				},
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
		}),
};

module.exports = config;
