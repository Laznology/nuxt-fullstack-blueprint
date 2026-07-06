<script setup lang="ts">
const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

definePageMeta({
  sitemap: {
    changefreq: "daily",
    priority: 1,
  },
});

useSeoMeta({
  description:
    "Zero-latency edge rendering. Absolute type safety. A perfectionist's Nuxt 4 starter template.",
  ogDescription:
    "Zero-latency edge rendering. Absolute type safety. A perfectionist's Nuxt 4 starter template.",
  ogTitle: "Nuxt Blueprint - Production-grade Nuxt 4 Template",
  title: "Nuxt Blueprint - Production-grade Nuxt 4 Template",
});

useSchemaOrg([
  defineWebSite({
    description: "Production-grade Nuxt 4 meta-template",
    name: "Nuxt Blueprint",
  }),
  defineWebPage({
    name: "Nuxt Blueprint - Production-grade Nuxt 4 Template",
  }),
]);
</script>

<template>
  <main
    class="bg-background text-foreground w-full max-w-full overflow-x-hidden font-sans antialiased selection:bg-primary selection:text-primary-foreground min-h-[100dvh] flex flex-col animate-in fade-in duration-700"
  >
    <nav
      class="fixed top-8 left-1/2 z-50 flex w-full max-w-4xl -translate-x-1/2 items-center justify-between rounded-full ring-1 ring-gray-200 dark:ring-gray-800 bg-background/60 px-6 py-3 shadow-2xl backdrop-blur-xl"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-full bg-foreground text-background"
        >
          <UIcon name="ph:lightning-bold" class="size-6" />
        </div>
        <span class="font-bold tracking-tight text-xl">NuxtBlueprint</span>
      </div>

      <div class="flex items-center gap-2">
        <NuxtLink
          to="/dashboard"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-foreground/10 disabled:opacity-50 disabled:pointer-events-none bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground h-10 py-2 px-4"
        >
          Dashboard
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <button
          @click="toggleColorMode"
          class="inline-flex items-center justify-center h-9 w-9 rounded-full bg-transparent text-foreground hover:bg-foreground/10 transition-colors"
        >
          <ClientOnly>
            <UIcon
              :name="colorMode.value === 'dark' ? 'ph:moon' : 'ph:sun'"
              class="size-5"
            />
          </ClientOnly>
        </button>
        <UButton
          to="/login"
          class="hidden rounded-full sm:flex bg-primary text-primary-foreground hover:bg-primary/90 border-0"
        >
          Deploy Now
        </UButton>
      </div>
    </nav>

    <section
      class="relative flex flex-col items-center justify-center min-h-[90dvh] pt-40 pb-32 px-6 text-center"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-foreground/5 via-background to-background pointer-events-none -z-10"
      />
      <div class="mx-auto max-w-6xl w-full">
        <h1
          class="text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[0.9] tracking-tighter text-foreground animate-in slide-in-from-bottom-8 fade-in duration-1000"
        >
          Zero-latency edge rendering. <br />
          Absolute type safety.
        </h1>
        <p
          class="mt-10 max-w-2xl mx-auto text-xl font-light leading-relaxed text-muted-foreground animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both"
        >
          Stop wiring up ORMs, Auth, and UI libraries from scratch. We
          architected the ultimate Nuxt boilerplate so you can launch in
          minutes, not weeks.
        </p>
        <div
          class="mt-12 flex flex-wrap items-center justify-center gap-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both"
        >
          <UButton
            to="/login"
            size="xl"
            class="rounded-full text-lg h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 group overflow-hidden relative border-0"
          >
            <span class="flex items-center gap-2">
              Initialize Project
              <UIcon
                name="ph:arrow-right-bold"
                class="size-5 transition-transform group-hover:translate-x-2"
              />
            </span>
          </UButton>
        </div>
      </div>
    </section>

    <section class="relative w-full bg-background py-48 px-6">
      <div class="mx-auto max-w-7xl">
        <div
          class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 grid-flow-dense"
        >
          <div
            class="md:col-span-2 md:row-span-2 rounded-3xl p-12 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
            />
            <div>
              <h2
                class="text-foreground text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight mb-6 leading-tight"
              >
                Save 50+ hours of setup time.
              </h2>
              <p
                class="text-muted-foreground text-xl font-light leading-relaxed"
              >
                We pre-configured Nuxt 4, Better Auth, and Drizzle ORM into a
                single cohesive stack. No more debugging integration errors or
                spending days writing boilerplate.
              </p>
            </div>
            <div
              class="mt-24 flex items-center gap-3 text-foreground font-medium"
            >
              <UIcon name="ph:clock-bold" class="size-6 text-[#00DC82]" />
              Launch Faster
            </div>
          </div>

          <div
            class="md:col-span-1 rounded-3xl p-10 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            <div class="flex items-center gap-4 text-muted-foreground mb-6">
              <UIcon name="ph:magnifying-glass-bold" class="size-6" />
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-4">
              SEO Optimized
            </h3>
            <p class="text-muted-foreground font-light leading-relaxed">
              Auto-generated sitemaps, structured Schema.org data, and dynamic
              meta tags out-of-the-box.
            </p>
          </div>

          <div
            class="md:col-span-1 rounded-3xl p-10 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            <div class="flex items-center gap-4 text-muted-foreground mb-6">
              <UIcon name="ph:database-bold" class="size-6" />
              <span
                class="text-sm font-mono tracking-widest uppercase text-muted-foreground/50"
              >
                Database
              </span>
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-4">
              Postgres Ready
            </h3>
            <p class="text-muted-foreground font-light leading-relaxed">
              Drizzle ORM paired with PGlite out-of-the-box. Push your schema
              and start querying immediately.
            </p>
          </div>

          <div
            class="md:col-span-1 rounded-3xl p-10 bg-primary border-none flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            <div
              class="flex items-center gap-4 text-primary-foreground/50 mb-6"
            >
              <UIcon name="ph:lock-key-bold" class="size-6" />
            </div>
            <h3 class="text-2xl font-bold text-primary-foreground mb-4">
              Ready Auth
            </h3>
            <p class="text-primary-foreground/80 font-medium leading-relaxed">
              Better Auth integrated with database sessions.
            </p>
          </div>

          <div
            class="md:col-span-1 rounded-3xl p-10 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 flex flex-col justify-between group overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            <div class="flex items-center gap-4 text-muted-foreground mb-6">
              <UIcon name="ph:palette-bold" class="size-6" />
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-4">Nuxt UI v4</h3>
            <p class="text-muted-foreground font-light leading-relaxed">
              Pre-configured with Tailwind CSS and standard components.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 border-y border-gray-200 dark:border-gray-800 bg-background overflow-hidden flex whitespace-nowrap"
    >
      <div class="animate-marquee flex items-center gap-24 shrink-0 w-max">
        <template v-for="i in 2" :key="i">
          <div class="flex items-center gap-24 text-muted-foreground mr-24">
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="logos:nuxt-icon"
                class="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                Nuxt 4
              </span>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="logos:vue"
                class="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                Vue 3.5
              </span>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="logos:tailwindcss-icon"
                class="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                Tailwind CSS
              </span>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="simple-icons:drizzle"
                class="size-14 text-[#00DC82] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                Drizzle ORM
              </span>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="logos:postgresql"
                class="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                PGlite
              </span>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="logos:nuxt-icon"
                class="size-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                Nuxt Hub
              </span>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UIcon
                name="simple-icons:betterauth"
                class="size-14 text-foreground grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span
                class="text-xs font-mono text-muted-foreground uppercase tracking-widest"
              >
                Better Auth
              </span>
            </div>
          </div>
        </template>
      </div>
    </section>

    <footer
      class="bg-background px-6 pt-48 pb-24 border-t border-gray-200 dark:border-gray-800 mt-auto"
    >
      <div class="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2
          class="mb-12 text-[clamp(4rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter text-foreground"
        >
          Architecture.
          <br />
          Perfected.
        </h2>
        <UButton
          to="/login"
          size="xl"
          class="h-16 rounded-full px-12 text-xl mt-4 bg-primary text-primary-foreground hover:bg-primary/90 border-0 flex items-center justify-center"
        >
          Deploy the Engine
        </UButton>

        <div
          class="mt-48 w-full flex flex-col items-center justify-between text-sm font-medium text-muted-foreground md:flex-row gap-6"
        >
          <span>© {{ new Date().getFullYear() }} Laznology.</span>
          <div class="flex gap-8">
            <a
              href="https://github.com/Laznology/nuxt-fullstack-blueprint"
              class="hover:text-foreground transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>
