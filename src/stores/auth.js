import { ref } from "vue";
import { defineStore } from "pinia";
import authApi from "@/apis/authApi";
import { jwtDecode } from "jwt-decode";
import { setLocalStorage, removeLocalStorage } from "@/utils/localstorage";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(null);
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
    setLocalStorage(token.value);
    user.value = jwtDecode(token.value);
    console.log(user.value);
  };

  const logout = () => {
    //토큰 정보 및 유저 정보 삭제
    token.value = null;
    user.value = null;
    removeLocalStorage();
  };

  return { user, token, join, login, logout };
});
