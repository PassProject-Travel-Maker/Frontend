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

import { Switch } from "@headlessui/vue";

const enabled = ref(false);

const changeMode = () => {
  mode.value = !mode.value;
};

const saveSchedule = async () => {
  //스케줄을 추가하게 되면 카카오 정보는 따로 구분해줘야한다.

  let temp = JSON.parse(JSON.stringify(dayForPlanDtoList.value));
  temp.map((day) => {
    day.scheduleForPlanDtoList.forEach((schedule, index) => {
      if (schedule.attrType === "KAKAO") {
        console.log("카카오~");
        let data = {
          attractionId: schedule.attractionId,
          attrType: schedule.attrType,
          kakaoDto: {
            id: schedule.attractionId,
            latitude: schedule.latitude,
            longitude: schedule.longitude,
            img: schedule.img,
            hit: schedule.hit,
            recommend: schedule.recommend,
            addr: schedule.addr,
            title: schedule.title,
          },
        };

        day.scheduleForPlanDtoList[index] = data;
      }
    });
  });

  console.log(temp);

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
        <i class="bi bi-x" @click="removeDay(day.num)"></i>
      </span>
    </div>
    <div class="day_box" @click="addDay">날짜 추가</div>
  </div>

  <hr class="divider" />

  <!-- toggle -->
  <div>
    순서 바꾸기
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex h-[16px] w-[32px] sm:h-[20px] sm:w-[40px] md:h-[24px] md:w-[48px] lg:h-[28px] lg:w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-4 sm:translate-x-5 md:translate-x-6 lg:translate-x-7' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[12px] w-[12px] sm:h-[16px] sm:w-[16px] md:h-[20px] md:w-[20px] lg:h-[24px] lg:w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>

  <ul
    v-if="mode"
    class="plan_container"
    :class="{ haveplan: dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length !== 0 }">
    <draggable v-model="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList">
      <template v-slot:item="{ item }">
        <PlanItem :plan="item" :mode="mode" />
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
    <!-- <img src="@/assets/img/bill-pay.png" class="corner-image" alt="Corner Image"/> -->
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
  padding: 5px;
}

.day_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.plan_container {
  margin-top: 30px;
}

.corner-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 250px;
  height: 250px;
}

.day_box span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
}

.day_box i {
  margin-left: auto;
  cursor: pointer;
}

.divider {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #e4e4e7;
}
</style>
