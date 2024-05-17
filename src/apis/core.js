// 여기다가 axios instance 생성

export const BASE_URL = "http://localhost:8000/api";

const config = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
export const api = axios.create(config);
export const Authapi = axios.create(config);

//Authapi에 .interceptors 같은거 붙여서 인증예외처리도 가능!
