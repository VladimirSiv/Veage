import inMemoryJWT from "./inMemoryJwt";

export async function getStats(url, user, from, to) {
  const filter = { user: user, from: from, to: to };
  const url_filter = url + "?filter=" + JSON.stringify(filter);
  const response = await fetch(url_filter, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${inMemoryJWT.getToken()}`,
    },
  });
  return response.json();
}
