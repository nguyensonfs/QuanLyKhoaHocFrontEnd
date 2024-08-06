import axios from "axios";

const apiUrl = import.meta.env.VITE_ROOT_API;

const request = axios.create({
  baseURL: apiUrl,
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, (options = {}));
  return response.data;
};

export const post = async (path, data, options = {}) => {
  const response = await request.post(path, data, options);
  return response.data;
};

export const put = async (path, data, options = {}) => {
  const response = await request.put(path, data, options);
  return response.data;
};

export const del = async (path, options = {}) => {
  const response = await request.delete(path, options);
  return response.data;
};

export default request;
