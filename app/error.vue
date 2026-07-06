<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main
    class="bg-background text-foreground w-full max-w-full overflow-x-hidden font-sans antialiased selection:bg-primary selection:text-primary-foreground min-h-[100dvh] flex flex-col animate-in fade-in duration-700"
  >
    <nav
      class="fixed top-8 left-1/2 z-50 flex w-full max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border border-border bg-background/60 px-6 py-3 shadow-2xl backdrop-blur-xl"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-full bg-foreground text-background"
        >
          <UIcon name="ph:lightning-bold" class="size-6" />
        </div>
        <span class="font-bold tracking-tight text-xl">NuxtBlueprint</span>
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
      </div>
    </nav>

    <section
      class="relative flex flex-col items-center justify-center min-h-[100dvh] pt-40 pb-32 px-6 text-center"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-foreground/5 via-background to-background pointer-events-none -z-10"
      />
      <div class="mx-auto max-w-6xl w-full">
        <h1
          class="text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[0.9] tracking-tighter text-foreground animate-in slide-in-from-bottom-8 fade-in duration-1000"
        >
          {{ error?.statusCode || "500" }}
        </h1>
        <p
          class="mt-10 max-w-2xl mx-auto text-xl font-light leading-relaxed text-muted-foreground animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both"
        >
          {{ error?.statusMessage || "An unexpected error occurred." }}
        </p>
        <div
          class="mt-12 flex flex-wrap items-center justify-center gap-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both"
        >
          <UButton
            @click="handleError"
            size="xl"
            class="rounded-full text-lg h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 group overflow-hidden relative border-0"
          >
            <span class="flex items-center gap-2">
              <UIcon
                name="ph:arrow-left-bold"
                class="size-5 transition-transform group-hover:-translate-x-2"
              />
              Return Home
            </span>
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>
