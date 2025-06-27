import axios from "axios";
import { baseurl } from "../values/baseurl";

const api = axios.create({
  baseURL: baseurl, // ubah jika pakai domain public
});

// Tambah token secara otomatis ke setiap request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
