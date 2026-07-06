export const useDashboardBreadcrumb = () => {
  const route = useRoute();

  return computed(() => {
    const paths = route.path.split("/").filter(Boolean);
    const breadcrumbs = [
      {
        label: "Home",
        to: "/",
      },
    ];

    let currentPath = "";
    for (const path of paths) {
      currentPath += `/${path}`;
      breadcrumbs.push({
        label: path.charAt(0).toUpperCase() + path.slice(1),
        to: currentPath,
      });
    }

    return breadcrumbs;
  });
};
