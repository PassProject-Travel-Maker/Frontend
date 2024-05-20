<script setup>
import PlanItem from "@/components/plan/component/PlanItem.vue";
import { storeToRefs } from "pinia";
import { usePlanStore } from "@/stores/plan";
import Draggable from "vue3-draggable";
import { ref } from "vue";
import { createPlanApi } from "@/apis/planApi";
const mode = ref(false);
const planstore = usePlanStore();
const { addDay } = planstore;
const { dayForPlanDtoList, picked, pickedindex, title, description } = storeToRefs(planstore);

const changeMode = () => {
  mode.value = !mode.value;
};

const saveSchedule = async () => {
  const schedule = {
    title: title.value,
    description: description.value,
    dayForPlanDtoList: dayForPlanDtoList.value,
  };

  console.log(schedule);
  const response = await createPlanApi(schedule);
  console.log(response);
  alert(response.data);
};
</script>
<template>
  <div class="day_container">
    <div class="day_box" v-for="day in dayForPlanDtoList" :key="day.num">
      <span :class="{ selected: picked === day.num }" @click="picked = day.num">
        {{ day.num }} 일차
      </span>
      <!-- <input type="radio" name="sex" :value="day.num" v-model="picked" checked/>
        <span> {{day.num}} 일차</span> -->
    </div>
    <div class="day_box" @click="addDay">날짜 추가</div>
  </div>
  <ul
    v-if="mode"
    class="plan_container"
    :class="{ haveplan: dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length !== 0 }">
    <draggable v-model="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList">
      <template v-slot:item="{ item }">
        <PlanItem :plan="item" />
      </template>
    </draggable>
  </ul>
  <ul
    class="plan_container"
    :class="{ haveplan: dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length !== 0 }"
    v-else>
    <PlanItem
      v-for="plan in dayForPlanDtoList[pickedindex].scheduleForPlanDtoList"
      :key="plan"
      :plan="plan" />
  </ul>

  <br />

  <div v-if="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length === 0">
    여행지를 선택해주세요!
  </div>
  <div class="button_box" v-else>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-auto"
      @click="changeMode"
      v-if="mode">
      돌아가기
    </button>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-auto"
      @click="changeMode"
      v-else>
      순서바꾸기
    </button>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="saveSchedule">
      저장
    </button>
    <button
      type="button"
      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      초기화
    </button>
  </div>
</template>

<style scoped>
.button_box {
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-end;
}
.selected {
  color: #18181b;
}
.day_box {
  width: 20%;
  border: 1px solid #a1a1aa;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #bdbdbd;
  cursor: pointer;
}

.day_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.plan_container {
  margin-top: 30px;
}
</style>
