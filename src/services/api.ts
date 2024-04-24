import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      let errMessage = error.response.data.message;

      if (errMessage === "jwt expired") {
        //refresh token
        localStorage.clear();
        window.location.href = "/auth/login";
      } else if (error.response.data.error === "Unauthorized") {
        localStorage.clear();
        window.location.href = "/auth/login";
      }
    } else if (error.response.status === 404) {
      if (window.location.pathname !== "/") {
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
