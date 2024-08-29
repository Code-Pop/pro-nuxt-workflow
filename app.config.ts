export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "cool",
    card: {
      background: "bg-transparent",
      divide: "divide-none",
      ring: "ring-0 ",
      base: "border-b border-gray-600 ",
      rounded: "rounded-none",
    },
    tabs: {
      list: {
        rounded: "rounded-none",
        background: "bg-transparent",
        base: "border-b border-gray-600",
        marker: {
          base: "w-full h-full",
          background: "bg-transparent",
        },
        tab: {
          active: "text-white",
        },
      },
    },
    container: {
      padding: "pa-0",
    },
  },
});
