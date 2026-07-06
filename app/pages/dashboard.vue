<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
const isSpotlightOpen = ref(false);
const openSpotlight = () => {
  isSpotlightOpen.value = true;
};
const onSpotlightSelect = (item: unknown) => {
  isSpotlightOpen.value = false;
  const typedItem = item as { onSelect?: () => void; to?: string };
  if (typedItem?.onSelect) {
    typedItem.onSelect();
  } else if (typedItem?.to) {
    navigateTo(typedItem.to);
  }
};

defineShortcuts({
  meta_k: () => (isSpotlightOpen.value = true),
});

const navigation = [
  { icon: "ph:house-bold", label: "Overview", to: "/dashboard" },
  { icon: "ph:users-bold", label: "Customers", to: "/dashboard/customers" },
  { icon: "ph:chart-bar-bold", label: "Analytics", to: "/dashboard/analytics" },
  { icon: "ph:gear-bold", label: "Settings", to: "/dashboard/settings" },
];

const userItems = ref<DropdownMenuItem[][]>([
  [
    {
      avatar: { alt: "User", size: "2xs" },
      label: "My Account",
      type: "label",
    },
  ],
  [
    {
      icon: "ph:palette-bold",
      label: "Change Theme",
      onSelect: () => toggleColorMode(),
    },
  ],
  [
    {
      color: "error",
      icon: "ph:sign-out-bold",
      label: "Log out",
      onSelect: () => navigateTo("/"),
    },
  ],
]);

definePageMeta({
  layout: false,
  // NOTE: Uncomment when ready to enforce login
  // auth: 'user',
});
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <div
          class="flex items-center gap-2"
          :class="[collapsed ? 'justify-center w-full' : 'flex-1']"
        >
          <UIcon
            name="ph:lightning-bold"
            class="size-5 text-primary shrink-0"
          />
          <span v-if="!collapsed" class="font-bold truncate"
            >NuxtBlueprint</span
          >
        </div>
        <UDashboardSidebarToggle class="md:hidden" />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          orientation="vertical"
          :collapsed="collapsed"
          :items="navigation"
        />
      </template>

      <template #footer="{ collapsed }">
        <UDropdownMenu
          :items="userItems"
          :content="{ align: 'end' }"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width)' }"
          class="w-full"
        >
          <UCard
            variant="soft"
            :ui="{ body: 'p-1.5 sm:p-1.5 flex items-center justify-between' }"
            class="w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <UUser
              :name="collapsed ? undefined : 'John Doe'"
              :description="collapsed ? undefined : 'john.doe@example.com'"
              :avatar="{
                src: 'https://avatars.githubusercontent.com/u/739984?v=4',
                alt: 'John Doe',
                size: 'xs',
              }"
              :class="[collapsed ? 'mx-auto' : 'truncate']"
            />
            <UIcon
              v-if="!collapsed"
              name="ph:caret-up-bold"
              class="size-4 text-muted shrink-0 ml-2"
            />
          </UCard>
        </UDropdownMenu>
      </template>
    </UDashboardSidebar>

    <UDashboardPanel class="flex-1 bg-background">
      <UDashboardNavbar>
        <template #left>
          <UDashboardSidebarToggle class="md:hidden mr-2" />
          <UDashboardSidebarCollapse
            class="hidden md:flex mr-2"
            variant="subtle"
          />
          <UBreadcrumb :items="useDashboardBreadcrumb().value" />
        </template>
        <template #right>
          <UButton
            variant="outline"
            color="neutral"
            class="hidden md:flex justify-between w-48 mr-2 text-muted"
            @click="openSpotlight"
          >
            <span class="flex items-center gap-2">
              <UIcon name="ph:magnifying-glass-bold" class="size-4" />
              <span>Search...</span>
            </span>
            <UKbd>⌘K</UKbd>
          </UButton>
          <UButton
            class="md:hidden mr-2"
            variant="ghost"
            color="neutral"
            icon="ph:magnifying-glass-bold"
            @click="openSpotlight"
          />
          <ClientOnly>
            <UButton
              variant="ghost"
              color="neutral"
              :icon="colorMode.value === 'dark' ? 'ph:moon' : 'ph:sun'"
              @click="toggleColorMode"
            />
          </ClientOnly>
        </template>
      </UDashboardNavbar>

      <UModal v-model:open="isSpotlightOpen">
        <template #content>
          <UCommandPalette
            placeholder="Search..."
            :groups="[
              {
                id: 'nav',
                items: navigation.map((n) => ({
                  id: n.label,
                  label: n.label,
                  icon: n.icon,
                  to: n.to,
                })),
              },
              {
                id: 'actions',
                items: [
                  {
                    id: 'theme',
                    label: 'Toggle Theme',
                    icon: 'ph:palette-bold',
                    onSelect: () => toggleColorMode(),
                  },
                ],
              },
            ]"
            @update:model-value="onSpotlightSelect"
          />
        </template>
      </UModal>

      <div class="flex-1 overflow-y-auto">
        <NuxtPage />
      </div>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
