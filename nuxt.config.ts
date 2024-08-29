export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
    "/admin/**": { ssr: false },
    "/blog": { isr: 3600 },
  },
});
