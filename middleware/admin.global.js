export default defineNuxtRouteMiddleware (to => {
  if (to.path === "/admin" && user.admin === false) {
    return navigateTo("login");
  }
})
