<script setup>
import { ref } from 'vue';

defineProps({
  area: Object,
});

// 모든 이미지를 동적으로 가져오기
const images = import.meta.glob('@/assets/img/kakao/*.png');

// 이미지 경로를 배열로 변환
const imagePaths = Object.keys(images);

const replaceImg = (e) => {
  const idx = Math.floor(Math.random() * imagePaths.length);
  const selectedImage = imagePaths[idx];
  e.target.src = selectedImage;
  // area.img = selectedImage;
};
</script>

<template>
    <li class="flex justify-between items-center gap-x-6 py-5 px-4">
      <div class="flex items-center">
        <img class="h-16 w-16 flex-none rounded-full bg-gray-50" :src="area.img" alt="" @error="replaceImg">
        <div class="min-w-0 flex-auto ml-4">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{area.title}}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{area.addr}}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">조회수 : {{area.hit}}</p>
        <p class="mt-1 text-xs leading-5 text-gray-500">조용히 올라가는 추천수 : {{area.recommend}}</p>
      </div>
    </li>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>
