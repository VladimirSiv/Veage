import inMemoryJWT from "./inMemoryJwt";

export default function logout() {
  // TODO add call to signout endpoint to invalidate the token
  inMemoryJWT.eraseToken();
  localStorage.removeItem("permissions");
  localStorage.removeItem("username");
  localStorage.removeItem("avatar");
  return Promise.resolve();
}
