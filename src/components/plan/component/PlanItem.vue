<script setup>
import { storeToRefs } from "pinia";
import { usePlanStore } from "@/stores/plan";

const planstore = usePlanStore();
const { deletedchecked } = storeToRefs(planstore);

defineProps({
  plan: Object,
  mode: Boolean,
  checkbox: Boolean,
  num: Number,
});

const emits = defineEmits(["click"]);
const replaceImg = (e) => {
  e.target.src = "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png";
};
</script>

<template>
  <li style="cursor: pointer" class="flex justify-between gap-x-5 py-5 pl plan_box h-24">
    <div class="w-8" v-if="!checkbox">{{ num + 1 }}</div>
    <div class="flex w-5/6 gap-x-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-justify"
        viewBox="0 0 16 16"
        v-if="mode">
        <path
          fill-rule="evenodd"
          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
      </svg>
      <input
        type="checkbox"
        :id="plan.attractionId"
        :value="plan.attractionId"
        v-model="deletedchecked"
        v-if="checkbox" />
      <label :for="plan.attractionId" v-if="checkbox">11</label>
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="plan.img"
        alt=""
        @error="replaceImg" />
      <div class="min-w-0 flex-auto w-" @click="$emit('click')">
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
  <hr />
</template>

<style scoped>
.plan_box {
  /* border: 1px solid #e4e4e7; */
  border-radius: 5px;
}
li {
  margin-bottom: 5px;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  cursor: pointer;
  padding-left: 23px;
  background-repeat: no-repeat;
  background-image: url("@/assets/img/checkbox/check-square.svg");
}
input[type="checkbox"]:checked + label {
  background-image: url("@/assets/img/checkbox/check-square-fill.svg");
}
</style>
