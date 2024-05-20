<script setup>
defineProps({
  plan: Object,
});

const replaceImg = (e) => {
  e.target.src = "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png";
};
</script>

<template>
  <li class="flex justify-between gap-x-6 py-5 pl plan_box h-24">
    <div class="flex min-w-0 gap-x-4">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="plan.img"
        alt=""
        @error="replaceImg" />
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">{{ plan.title }}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ plan.addr }}</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">조회수 : {{ plan.hit }}</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">
        조용히 올라가는 추천수 : {{ plan.recommend }}
      </p>
    </div>
  </li>
</template>

<style scoped>
.plan_box {
  border: 1px solid #e4e4e7;
  border-radius: 5px;
}
li {
  margin-bottom: 5px;
}
</style>
