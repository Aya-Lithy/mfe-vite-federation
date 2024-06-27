import axios from "axios";

const axiosInstance = axios.create({
  headers: {},
});

axiosInstance.interceptors.request.use(function (config) {
  return new Promise((resolve) => {
    return resolve(config);
  });
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
