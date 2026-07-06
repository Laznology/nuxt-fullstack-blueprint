<script setup lang="ts">
const breadcrumbs = useDashboardBreadcrumb();
onMounted(() => {
  breadcrumbs.value = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Overview" },
  ];
});
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8 space-y-6">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <UCard v-for="i in 4" :key="i">
        <div class="flex items-center justify-between">
          <div class="text-sm font-medium text-muted">Metric {{ i }}</div>
          <UIcon name="ph:trend-up-bold" class="text-green-500" />
        </div>
        <div class="mt-2 text-3xl font-bold">
          {{ Math.floor(Math.random() * 5000) + 1000 }}
        </div>
        <div class="mt-1 text-sm text-green-500">
          +{{ Math.floor(Math.random() * 20) + 5 }}% from last month
        </div>
      </UCard>
    </div>

    <UCard class="min-h-[400px]">
      <template #header>
        <h3 class="font-semibold text-lg">Recent Activity</h3>
      </template>
      <div class="flex flex-col items-center justify-center h-64 text-muted">
        <UIcon name="ph:chart-line-up" class="size-16 mb-4 opacity-50" />
        <p>Your charts and data tables will appear here.</p>
      </div>
    </UCard>
  </div>
</template>
