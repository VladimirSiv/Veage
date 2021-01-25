import simpleRestProvider from "ra-data-simple-rest";
import inMemoryJWT from "./inMemoryJwt";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  // TODO revisit/fix/refactor
  // Ref: https://github.com/marmelab/react-admin/issues/5452
  if (!options.headers || options.headers["Content-Type"] === "text/plain") {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const access_token = inMemoryJWT.getToken();
  if (access_token) {
    options.headers.set("Authorization", `Bearer ${access_token}`);
  } else {
    return inMemoryJWT.getRefreshedToken().then((gotFreshToken) => {
      if (gotFreshToken) {
        options.headers.set(
          "Authorization",
          `Bearer ${inMemoryJWT.getToken()}`
        );
      }
      return fetchUtils.fetchJson(url, options);
    });
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider("http://localhost:3000", httpClient);

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file.rawFile);
  });

const DataProvider = {
  ...dataProvider,
  // Image upload
  create: (resource, params) => {
    if (resource !== "users") {
      return dataProvider.create(resource, params);
    }
    return Promise.all([params.data.image].map(convertFileToBase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64) => ({
          src: picture64,
          title: `${params.data.title}`,
        }))
      )
      .then((transformedNewImage) =>
        dataProvider.create(resource, {
          ...params,
          data: {
            ...params.data,
            image: transformedNewImage[0],
          },
        })
      );
  },
};

export default DataProvider;
