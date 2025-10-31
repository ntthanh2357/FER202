import axios from "axios";

const movieApi = axios.create({
  baseURL: "http://127.0.0.1:3001", // 👈 thay localhost bằng 127.0.0.1
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default movieApi;
