// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: process.env.NODE_ENV !== "production" },
	modules: ["@unocss/nuxt", "@nuxt/ui", "@nuxt/image", "@nuxthub/core"],
	css: ["~/assets/css/main.css"],
	nitro: {
		preset: "bun",
		experimental: {
			tasks: true,
		},
	},
	vite: {
		optimizeDeps: {
			include: ["@vue/devtools-core", "@vue/devtools-kit"],
		},
	},
	hub: {
		db: {
			dialect: "postgresql",
			connection: {
				connectionString: process.env.DATABASE_URL,
			},
		},
	},
});
