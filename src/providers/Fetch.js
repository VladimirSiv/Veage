import inMemoryJWT from "./inMemoryJwt";

export async function get(url = "") {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${inMemoryJWT.getToken()}`,
    },
  });
  return response.json();
}
