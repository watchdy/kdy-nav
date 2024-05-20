import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@vueuse/nuxt',
		'nuxt-icon',
		'@pinia-plugin-persistedstate/nuxt',
	],
	pinia: {
		autoImports: ['defineStore', 'storeToRefs'],
	},
	alias: {
		'@': path.resolve(__dirname, 'src'),
	},
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					// size: '32x32',
					type: 'image/x-icon',
					href: 'https://pro-img.kdy666.com/file/8fa68671fd8e157eae392.jpg',
				},
			],
			meta: [
				{
					name: 'keywords',
					content: '朝阳导航站 专注于为您提供各种免费优质资源，包括影视资源、动漫番剧、软件工具、AI资源等。',
				},
				{
					name: 'description',
					content: '朝阳导航站 专注于为您提供各种免费优质资源，包括影视资源、动漫番剧、软件工具、AI资源等。',
				},
			],
		},
		buildAssetsDir: '/fre/',
	},

	vite: {
		// 预处理，全局可用
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import 'assets/_variables.scss';`,
				},
			},
		},
		esbuild: {
			drop: process.env.NODE_ENV === 'development' ? [] : ['console', 'debugger'],
		},
	},
	experimental: {
		writeEarlyHints: false,
		inlineSSRStyles: false,
	},
	css: [
		'~/assets/global.scss',
		'~/assets/tailwind.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/pro-solid-svg-icons',
			'@fortawesome/pro-regular-svg-icons',
			'@fortawesome/free-brands-svg-icons',
		],
	},

	devtools: { enabled: process.env.NODE_ENV === 'development' ? true : false },
})
