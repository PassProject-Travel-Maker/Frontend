<script setup>
defineProps({
  area: Object,
});

const replaceImg = (e) => {
  e.target.src = "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png";
};
</script>

<template>
  <li class="flex justify-between items-center gap-x-6 py-5 px-4">
    <div class="flex items-center">
      <img
        class="h-16 w-16 flex-none rounded-full bg-gray-50"
        :src="area.kakaoDto.img"
        alt=""
        @error="replaceImg" />
      <div class="min-w-0 flex-auto ml-4">
        <p class="text-sm font-semibold leading-6 text-gray-900">{{ area.kakaoDto.title }}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ area.kakaoDto.addr }}</p>
      </div>
    </div>

    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="mt-1 text-xs leading-5 text-gray-500">조회수 : {{ area.kakaoDto.hit }}</p>
      <p class="text-sm leading-6 text-gray-900">
        조용히 올라가는 추천수 : {{ area.kakaoDto.recommend }}
      </p>
    </div>
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>
