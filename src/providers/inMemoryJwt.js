const inMemoryJWTManager = () => {
  let refreshEndpoint = "/token";
  let refreshTimeOutId;
  let inMemoryJWT = null;
  let isRefreshing = null;

  window.addEventListener("storage", (event) => {
    if (event.key === "logout") {
      inMemoryJWT = null;
    }
  });

  const refreshToken = (delay) => {
    refreshTimeOutId = window.setTimeout(getRefreshedToken, delay - 5000);
  };

  const waitForTokenRefresh = () => {
    if (!isRefreshing) {
      return Promise.resolve();
    }
    return isRefreshing.then(() => {
      isRefreshing = null;
      return true;
    });
  };

  const abordRefreshToken = () => {
    if (refreshTimeOutId) {
      window.clearTimeout(refreshTimeOutId);
    }
  };

  const getRefreshedToken = () => {
    const request = new Request(refreshEndpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      }),
    });
    isRefreshing = fetch(request)
      .then((response) => {
        if (response.status !== 200) {
          eraseToken();
          console.log("Failed to renew the access token.");
          return { token: null };
        }
        return response.json();
      })
      .then(({ access_token, access_expiresIn }) => {
        if (access_token) {
          setToken(access_token, access_expiresIn);
          return true;
        }

        return false;
      });
    return isRefreshing;
  };

  const getToken = () => inMemoryJWT;

  const setToken = (token, delay) => {
    inMemoryJWT = token;
    refreshToken(delay);
    return true;
  };

  const eraseToken = () => {
    inMemoryJWT = null;
    abordRefreshToken();
    window.localStorage.setItem("logout", Date.now());
    return true;
  };

  return {
    eraseToken,
    getToken,
    setToken,
    getRefreshedToken,
    waitForTokenRefresh,
  };
};

export default inMemoryJWTManager();
