// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const img_to_figure = require("./src/remark/img-to-figure");
const remark_abbr = require("remark-abbr");

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

	onBrokenLinks:         "warn",
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
					remarkPlugins: [
						img_to_figure,
						remark_abbr,
					],

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
			colorMode: {
				defaultMode:               "dark",
				disableSwitch:             true,
				respectPrefersColorScheme: false,
			},
			metadata:  [
				{
					name:    "twitter:card",
					content: "summary_large_image",
				},
				{
					name:    "twitter:site",
					content: "@Overrid68880391",
				},
				{
					name:    "twitter:creator",
					content: "@Overrid68880391",
				},
				{
					name:    "twitter:title",
					content: "Aetheria Docs",
				},
				{
					name:    "twitter:description",
					content: "The Overpowered and Extensible Open-Source Solution entirely built in typescript",
				},
				{
					name:    "twitter:image",
					content: "https://aetheria-docs.override.sh/img/aetheria-banner-1600x600.png",
				},
				{
					name:    "og:title",
					content: "Aetheria Docs",
				},
				{
					name:    "og:description",
					content: "The Overpowered and Extensible Open-Source Solution entirely built in typescript",
				},
				{
					name:    "og:image",
					content: "https://aetheria-docs.override.sh/img/aetheria-banner-1600x600.png",
				},
				{
					name:    "og:url",
					content: "https://aetheria-docs.override.sh",
				},
				{
					name:    "og:site_name",
					content: "Aetheria Docs",
				},
				{
					name:    "og:locale",
					content: "en_US",
				},
				{
					name:    "og:type",
					content: "website",
				},
				{
					name:    "description",
					content: "The Overpowered and Extensible Open-Source Solution entirely built in typescript",
				},
				{
					name:    "keywords",
					content: "aetheria, docs, documentation, aetheria docs, aetheria documentation, " +
					         "aetheria documentation site, aetheria docs site, aetheria docs website, " +
					         "aetheria documentation website, aetheria documentation site, cms, typescript, " +
					         "cms documentation, override.sh, override",
				},
				{
					name:    "robots",
					content: "index, follow",
				},
				{
					name:    "googlebot",
					content: "index, follow",
				},
				{
					name:    "bingbot",
					content: "index, follow",
				},
				{
					name:    "theme-color",
					content: "#262833",
				},
				{
					name:    "msapplication-TileColor",
					content: "#262833",
				},
				{
					name:    "application-name",
					content: "Aetheria Docs",
				},
				{
					name:    "apple-mobile-web-app-title",
					content: "Aetheria Docs",
				},
				{
					name:    "apple-mobile-web-app-capable",
					content: "yes",
				},
				{
					name:    "apple-mobile-web-app-status-bar-style",
					content: "black-translucent",
				},
			],
			// Replace with your project's social card
			image:           "img/aetheria-banner-1600x600.png",
			navbar:          {
				title: "Aetheria Docs",
				logo:  {
					alt: "Aetheria Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type:      "docSidebar",
						sidebarId: "Documentation",
						position:  "left",
						label:     "Documentation",
					},
					{
						type:      "docSidebar",
						sidebarId: "Packages",
						position:  "left",
						label:     "Packages",
					},
					{
						type:      "docSidebar",
						sidebarId: "Plugins",
						position:  "left",
						label:     "Plugins",
					},
					{
						type:      "docSidebar",
						sidebarId: "Docker",
						position:  "left",
						label:     "Docker",
					},
					{
						type:      "docSidebar",
						sidebarId: "CLI",
						position:  "left",
						label:     "CLI",
					},
					{
						href:     "https://github.com/override-sh/aetheria",
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
								label: "Introduction",
								to:    "/intro",
							},
							{
								label: "Getting Started",
								to:    "/getting-started",
							},
							{
								label: "Advanced",
								to:    "/advanced",
							},
							{
								label: "Docker",
								to:    "/docker",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Twitter",
								href:  "https://twitter.com/Overrid68880391",
							},
							{
								label: "Github",
								href:  "https://github.com/override-sh/aetheria",
							},
							{
								label: "Stack Overflow",
								href:  "https://stackoverflow.com/questions/tagged/aetheria",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Packages",
								to:    "/packages",
							},
							{
								label: "Plugins",
								to:    "/plugins",
							},
						],
					},
				],
				copyright: `Copyright © ${ new Date().getFullYear() } Override`,
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
