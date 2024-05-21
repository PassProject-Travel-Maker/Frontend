<script setup>
defineProps({
  plan: Object,
});
</script>

<template>
  <article :key="plan.id" class="flex max-w-xl flex-col items-start justify-between">
    <!-- 사각형 모양의 사진 -->
    <div class="w-full mb-4">
      <img
        src="https://static.thenounproject.com/png/3674270-200.png"
        alt="plan image"
        class="w-full h-48 object-cover bg-gray-50 border" />
    </div>
    <div class="flex items-center gap-x-4 text-xs">
      <div class="text-gray-500" v-if="plan.createdDate !== null">{{ plan.createdDate }}</div>
      <!-- <div class="text-gray-500" v-else>{{ new Date() }}</div> -->
    </div>
    <div class="group relative">
      <h1 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        {{ plan.title }}
      </h1>
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ plan.description }}</p>
    </div>
  </article>
</template>

<style scoped></style>
