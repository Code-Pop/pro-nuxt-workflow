export default defineEventHandler(async (event) => {
  const auth = getCookie(event, "user-auth");
  const url = getRequestURL(event);
  if (auth || url.pathname === "/login") {
    return;
  } else {
    return sendRedirect(event, "/login", 302);
  }
});
