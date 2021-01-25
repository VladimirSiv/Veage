import inMemoryJWT from "./inMemoryJwt";
import decodeJwt from "jwt-decode";

export default function login({ username, password }) {
  const request = new Request("signin", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  return fetch(request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ access_token, access_expiresIn, avatar }) => {
      const decodedToken = decodeJwt(access_token);
      if (avatar) localStorage.setItem("avatar", avatar);
      inMemoryJWT.setToken(access_token, access_expiresIn);
      localStorage.setItem("permissions", decodedToken.permissions);
      localStorage.setItem("username", decodedToken.username);
    });
}
