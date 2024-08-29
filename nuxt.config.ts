// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    customTabs: [
      {
        name: "histoire",
        title: "Histoire",
        icon: "/histoire-logo.svg",
        view: {
          type: "iframe",
          src: "http://localhost:6006/",
        },
      },
    ],
  },
});
