<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const joinForm = ref({
  id: "",
  password: "",
  email: "", 
  name: "",
  nickname: "", 
  addr: "",
})

const join = async () => {
  if (!confirm("이대로 가입하시겠습니까?")) return;
  try {
    await authStore.join(joinForm.value);
    router.push("/");
  } catch (error) {
    console.error("에러:", error);
    alert("가입 실패");
  }
};
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">회원가입</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="join" class="space-y-6">
        <!-- ID -->
        <div>
          <label for="id" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
          <div class="flex mt-2">
            <input v-model.trim="joinForm.id" id="id" name="id" type="text" required="" class="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <button class="w-1/4 ml-2 py-1.5 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              아이디 확인
            </button>
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input v-model.trim="joinForm.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input v-model.trim="joinForm.email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input v-model.trim="joinForm.name" id="name" name="name" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- NickName -->
        <div>
          <label for="nickname" class="block text-sm font-medium leading-6 text-gray-900">Nickname</label>
          <div class="mt-2">
            <input v-model.trim="joinForm.nickname" id="nickname" name="nickname" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Address -->
        <div>
          <label for="addr" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
          <div class="mt-2">
            <input v-model.trim="joinForm.addr" id="addr" name="addr" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
