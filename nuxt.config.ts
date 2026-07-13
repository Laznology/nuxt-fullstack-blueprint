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
    dir: process.env.VERCEL ? "/tmp/hub" : ".data",
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
    "@vite-pwa/nuxt",
  ],
  nitro: {
    experimental: {
      openAPI: true,
      tasks: true,
    },
    hooks: {
      compiled: () => {
        if (process.env.prerender || !import.meta.dev) {
          setTimeout(() => process.exit(0), 50);
        }
      },
    },
  },
  ogImage: {
    zeroRuntime: true,
  },
  pwa: {
    manifest: {
      display: "standalone",
      icons: [
        {
          sizes: "192x192",
          src: "pwa-192x192.png",
          type: "image/png",
        },
        {
          sizes: "512x512",
          src: "pwa-512x512.png",
          type: "image/png",
        },
      ],
      name: "Nuxt Blueprint",
      short_name: "Nuxt PWA",
      theme_color: "#000000",
    },
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: null,
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
