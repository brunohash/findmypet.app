import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.103:7209/v1/",
  headers: { "Content-Type": "application/json" },
});

export default api;
