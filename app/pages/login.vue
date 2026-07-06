<script setup lang="ts">
const form = reactive({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await authClient.signIn.email(form, {
    onSuccess: () => navigateTo("/dashboard"),
  });
};

definePageMeta({
  auth: "guest",
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h2 class="text-xl font-bold">Log in</h2>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormField label="Email" name="email">
          <UInput
            v-model="form.email"
            type="email"
            autocomplete="email"
            required
            class="w-full"
          />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput
            v-model="form.password"
            type="password"
            autocomplete="current-password"
            required
            class="w-full"
          />
        </UFormField>

        <UButton type="submit" class="w-full justify-center" color="primary">
          Log in
        </UButton>
      </form>

      <template #footer>
        <div class="text-center text-sm">
          Don't have an account?
          <NuxtLink to="/register" class="text-primary">Sign up</NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>
