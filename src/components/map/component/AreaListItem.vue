<script setup>
import { ref } from "vue";

defineProps({
  area: Object,
});
defineEmits(["addplan", "showarea"]);
// 모든 이미지를 동적으로 가져오기
const images = import.meta.glob("@/assets/img/kakao/*.png");

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
    <div class="flex w-5/6 gap-x-3" @click="$emit('showarea')">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="area.img"
        alt=""
        @error="replaceImg" />
      <div class="min-w-0 flex-auto w-32">
        <p class="text-sm font-semibold leading-6 text-gray-900">{{ area.title }}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ area.addr }}</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end" @click="$emit('addplan')">
      <p>추가</p>
    </div>
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>
