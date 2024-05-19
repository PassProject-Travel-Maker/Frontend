<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  if (!confirm("로그아웃 하시겠습니까?")) return;
  authStore.logout();
  router.push("/"); //홈으로
};
</script>

<template>
  <!-- Logo -->
  <div id="header">
    <div id="logocontainer">
      <RouterLink to="/">
        <img src="@/assets/img/icon.svg" />
      </RouterLink>
      <RouterLink to="/">
        <img src="@/assets/img/title.svg" />
      </RouterLink>
    </div>

    <!-- MyPage & Sign out -->
    <div id="header_right" v-if="authStore.user === null">
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup"><button>Create free account</button></RouterLink>
    </div>
    <div id="header_right" v-else>
      <RouterLink to="/mypage">MyPage</RouterLink>
      <p @click="logout">Sign out</p>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  
}
#header_right {
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}
button {
  border-radius: 10px;
  color: #ffffff;
  background-color: #18181b;
  height: 45px;
  width: 154px;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #18181b;
}
#logocontainer {
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
