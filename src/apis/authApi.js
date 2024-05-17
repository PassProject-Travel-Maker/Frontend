import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});

export default authApi;