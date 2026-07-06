// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  fonts: {
    families: [{ global: true, name: "Inter", provider: "google" }],
  },
  hub: {
    db: {
      dialect: "postgresql",
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxthub/core",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "nuxt-security",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
    rateLimiter: {
      interval: 300_000,
      tokensPerInterval: 150,
    },
  },
  site: {
    defaultLocale: "en",
    description: "Production-grade Nuxt 4 meta-template",
    name: "Nuxt Blueprint",
    url: "https://nuxt-fullstack-blueprint.com",
  },
  vite: {
    optimizeDeps: {
      include: [
        "@unhead/schema-org/vue",
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
  },
});
