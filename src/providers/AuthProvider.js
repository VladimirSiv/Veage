import inMemoryJWT from "./inMemoryJwt";
import login from "./Login";
import logout from "./Logout";

const authProvider = {
  // Refresh token ref:
  // https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
  // https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html

  login: login,
  logout: logout,
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      inMemoryJWT.eraseToken();
      localStorage.clear();
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return inMemoryJWT.waitForTokenRefresh().then(() => {
      return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    });
  },
  getPermissions: () => {
    return inMemoryJWT.waitForTokenRefresh().then(() => {
      const role = localStorage.getItem("permissions");
      return role ? Promise.resolve(role) : Promise.reject();
    });
  },
  getIdentity: () => {
    try {
      const user_info = {};
      if (localStorage.getItem("username"))
        user_info["fullName"] = localStorage.getItem("username");
      if (localStorage.getItem("avatar"))
        user_info["avatar"] = localStorage.getItem("avatar");
      return Promise.resolve(user_info);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authProvider;
