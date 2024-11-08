import axios from "axios";
import { BASE_URL, ACCESS_TOKEN } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});

apiService.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;

apiService.interceptors.request.use(
  (request) => {
    // console.log("Start Request", request);
    return request;
  },
  function (error) {
    // console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    // console.log("Response", response);
    return response;
  },
  function (error) {
    // console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export { apiService };
