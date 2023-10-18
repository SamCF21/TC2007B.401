import { AuthProvider } from "react-admin";

const authProvider = {
  login: async ({ username, password }) => {
    const request = new Request("http://localhost:1338/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      localStorage.setItem("auth", auth.token);
      localStorage.setItem(
        "identity",
        JSON.stringify({ id: auth.id, fullName: auth.fullName })
      );
      return Promise.resolve();
    } catch {
      throw new Error("Error en usuario o password");
    }
  },
  logout: () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("identity");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      localStorage.removeItem("identity");
      localStorage.removeItem("permissions");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      return Promise.resolve(JSON.parse(localStorage.getItem("identity")));
    } catch {
      return Promise.reject();
    }
  },
  getPermissions: async () => {
    const token = localStorage.getItem("auth");
    if (!token) {
      return Promise.reject("Error linea 53");
    }

    const response = await fetch("http://localhost:1338/user/permissions", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status < 200 || response.status >= 300) {
      return Promise.reject("Error linea 64");
    }

    const permissions = await response.json();
    console.log(permissions);
    return Promise.resolve(permissions);
  },
};

export default authProvider;
