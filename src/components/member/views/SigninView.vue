<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const router = useRouter();

const loginForm = ref({
  id: "",
  password: "",
});

const login = async () => {
  console.log(loginForm.value);
  try {
    await authStore.login(loginForm.value);
    router.push("/");
  } catch (error) {
    console.error("에러:", error);
    alert(" 실패");
  }
};
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">로그인</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-md p-10">
      <form class="space-y-6"  @submit.prevent="login">
        
        <!-- ID -->
        <div>
          <label for="id" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
          <div class="mt-2">
            <input v-model.trim="loginForm.id" id="id" name="id" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-blue-500 hover:text-blue-400">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model.trim="loginForm.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        회원이 아니신가요?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-blue-500 hover:text-blue-400">회원가입</a>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
