import { ref } from "vue";
import { defineStore } from "pinia";
import authApi from "@/apis/authApi";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = ("auth", () => {
  const token = ref(null);defineStore
  const user = ref(null);

  const join = async (joinInfo) => {
    const response = await authApi.post("/join", joinInfo);

    //토큰 정보 및 유저 정보 세팅(회원 가입 후, 로그인 따로 할 필요 없음)
    token.value = response.data;
    user.value = jwtDecode(token.value);
  };

  const login = async (loginInfo) => {
    const response = await authApi.post("/login", loginInfo);

    //토큰 정보 및 유저 정보 세팅
    token.value = response.data;
    user.value = jwtDecode(token.value);
  };

  const logout = () => {
    //토큰 정보 및 유저 정보 삭제
    token.value = null;
    user.value = null;
  };

  return { user, token, join, login, logout };
});
