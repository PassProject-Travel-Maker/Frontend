<script setup>
defineProps({
  myinfo: Object,
});
</script>

<template>
  <div class="flex min-w-0 gap-x-4 divide-y divide-gray-100 relative">
    <div class="mx-8 my-8 flex gap-x-8">
        <!-- <i class="bi bi-person-gear icon-custom"></i> -->
        <i class="bi bi-person icon-custom"></i>


      <div class="min-w-0">
        <p class="text-lg font-semibold leading-6 text-gray-900">이름 : {{ myinfo.name }}</p>
        <p class="text-lg mt-1 truncate text-xs leading-5 text-gray-500">
          이메일 : {{ myinfo.email }}
        </p>
        <p class="text-lg mt-1 truncate text-xs leading-5 text-gray-500">
          별명 : {{ myinfo.nickname }}
        </p>
      </div>

      <div class="absolute right-0 bottom-0">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 border">
          정보수정
        </button>
        <button
          type="button"
          class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          회원탈퇴
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-custom {
  font-size: 90px; /* 아이콘의 크기를 조정합니다 */
  height: 96px; /* 이미지의 높이 */
  width: 96px; /* 이미지의 너비 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* 둥근 모서리 */
  background-color: #f9fafb; /* 배경 색상 */
  color: #000; /* 아이콘 색상 (필요에 따라 조정 가능) */
}

</style>
