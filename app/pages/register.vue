<script setup lang="ts">
const form = reactive({
  email: "",
  name: "",
  password: "",
});

const handleRegister = async () => {
  await authClient.signUp.email(
    {
      email: form.email,
      name: form.name,
      password: form.password,
    },
    {
      onSuccess: () => {
        navigateTo("/dashboard");
      },
    }
  );
};

definePageMeta({
  auth: "guest",
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h2 class="text-xl font-bold">Sign up</h2>
      </template>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <UFormField label="Name" name="name">
          <UInput
            v-model="form.name"
            type="text"
            autocomplete="name"
            required
            class="w-full"
          />
        </UFormField>

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
            autocomplete="new-password"
            required
            class="w-full"
          />
        </UFormField>

        <UButton type="submit" class="w-full justify-center" color="primary">
          Sign up
        </UButton>
      </form>

      <template #footer>
        <div class="text-center text-sm">
          Already have an account?
          <NuxtLink to="/login" class="text-primary">Log in</NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>
