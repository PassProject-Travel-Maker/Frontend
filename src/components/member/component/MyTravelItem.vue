<script setup>
defineProps({
  plan: Object,
});

const emit = defineEmits(["click"]);

// 모든 이미지를 동적으로 가져오기
const images = import.meta.glob('@/assets/img/travel/*.jpeg');

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
  <article
    :key="plan.id"
    class="flex max-w-xl flex-col items-start justify-between article-box"
    @click="$emit('click')">
    <!-- 사각형 모양의 사진 -->
    <div class="w-full mb-4">
      <img
        src=""
        @error="replaceImg"
        alt="plan image"
        class="w-full h-48 object-cover bg-gray-50 border image-container" />
    </div>
    <div class="flex items-center gap-x-4 text-xs">
      <div class="text-gray-500" v-if="plan.createdDate !== null">{{ plan.createdDate }}</div>
    </div>
    <div class="group relative">
      <h1 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        {{ plan.title }}
      </h1>
      <hr class="custom-hr"/>
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ plan.description }}</p>
      <!-- <br/><br/> -->
    </div>
  </article>
</template>

<style scoped>
.article-box {
  border: 1px solid #e4e4e7;
  border-radius: 5px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  transition: box-shadow 0.5s;
}

.article-box:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
  border-radius: 5px;
}

.custom-hr {
  width: 50%; /* Adjust the width as needed */
  border: 1px solid #e4e4e7; /* Adjust the color as needed */
  margin: 10px 0; /* Adjust the spacing as needed */
}

.group {
  margin-bottom: 20px; /* Add spacing after the group */
}
</style>
