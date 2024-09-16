import axios from "axios";
import { baseURL } from "./baseUrl";

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const tokens = localStorage.getItem("tokens");

  // Check if tokens is not null before parsing
  if (tokens) {
    config.headers.Authorization = `Bearer ${JSON.parse(tokens).access}`;
  }
  return config;
});
