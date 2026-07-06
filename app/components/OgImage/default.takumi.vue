<script setup lang="ts">
defineProps({
  description: {
    default: "",
    type: String,
  },
  theme: {
    default: "#3b82f6",
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center bg-zinc-950 p-20"
    :style="{ borderTop: `16px solid ${theme}` }"
  >
    <div class="flex flex-col flex-1 justify-center">
      <div class="flex items-center mb-8">
        <UIcon
          name="ph:lightning-bold"
          class="w-12 h-12 text-primary"
          :style="{ color: theme }"
        />
        <span class="ml-4 text-4xl font-bold text-zinc-100 tracking-tight"
          >Nuxt Blueprint</span
        >
      </div>
      <h1
        class="text-8xl font-black text-white leading-tight tracking-tighter mb-8"
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="text-4xl text-zinc-400 max-w-4xl leading-snug font-medium"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
