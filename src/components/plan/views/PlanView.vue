<script setup>
import { onMounted } from "vue";
import PlanItem from "@/components/plan/component/PlanItem.vue";
import { storeToRefs } from "pinia";
import { usePlanStore } from "@/stores/plan";
import Draggable from "vue3-draggable";
import { createPlanApi,modifyPlanApi } from "@/apis/planApi";
import { Switch } from "@headlessui/vue";
import { useCategoryMapStore } from "@/stores/map.js";
import { useRouter, useRoute } from "vue-router";
import { useMemberStore } from "@/stores/member";
const memberstore = useMemberStore();
const { myPlan } = storeToRefs(memberstore);

const mapstore = useCategoryMapStore();
const { getLatLng } = mapstore;

const route = useRoute();
const router = useRouter();
const planstore = usePlanStore();
const { addDay, deleteSchedule, removeDay } = planstore;
const {
  dayForPlanDtoList,
  picked,
  pickedindex,
  title,
  description,
  enabled,
  deletedchecked,
  daycount,
} = storeToRefs(planstore);

onMounted(() => {
  console.log(route);
  if (route.params.mode !== undefined) {
    console.log(myPlan.value);

    //데이터 초기화
    title.value = myPlan.value.title;
    description.value = myPlan.value.description;
    daycount.value = Number(myPlan.value.dayDetailResponseDtoList.length);
    picked.value = 1;
    pickedindex.value = 0;
    enabled.value = false;
    deletedchecked.value = [];

    let editday = [];
    myPlan.value.dayDetailResponseDtoList.forEach((item, index) => {
      //아이템
      //
      let editschedule = [];
      item.scheduleDetailResponseDtoList.forEach((schedule) => {
        editschedule.push(schedule.attractionInfoDto2);
      });
      console.log(editschedule);

      editday.push({
        num: index + 1,
        scheduleForPlanDtoList: editschedule,
      });
    });

    console.log(editday);
    dayForPlanDtoList.value = editday;
    //데이터 변환
  }
});
const saveSchedule = async () => {
  //스케줄을 추가하게 되면 카카오 정보는 따로 구분해줘야한다.

  let temp = JSON.parse(JSON.stringify(dayForPlanDtoList.value));
  temp.map((day) => {
    day.scheduleForPlanDtoList.forEach((schedule, index) => {
      if (schedule.attrType === "KAKAO") {
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
  dayForPlanDtoList.value = temp;

  const schedule = {
    title: title.value,
    description: description.value,
    dayForPlanDtoList: dayForPlanDtoList.value,
  };

  console.log(schedule);

  if(route.params.mode !== undefined)
  {
    //편집일때
    const response = await modifyPlanApi(schedule, route.params.mode);
    console.log(response);
    alert("수정이 완료되었습니다");
  }
  else{
    //생성일때
    const response = await createPlanApi(schedule);
    alert(response.data);
  }
  router.push({name : "mypage"});
};
</script>

<template>
  <div class="day_container">
    <div class="day_box" v-for="day in dayForPlanDtoList" :key="day.num">
      <span :class="{ selected: picked === day.num }" @click="picked = day.num">
        {{ day.num }} 일차
      </span>
      <i class="bi bi-x" @click="removeDay(day.num)"></i>
    </div>
    <div class="day_box" @click="addDay">날짜 추가</div>
  </div>

  <hr class="divider" />

  <!-- toggle -->
  <div class="toggle_container">
    <div style="padding-right: 10px;">
      <span v-if="enabled">순서 바꾸기</span>
      <span v-else>선택 삭제</span>
    </div>
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex h-[16px] w-[32px] sm:h-[20px] sm:w-[40px] md:h-[24px] md:w-[48px] lg:h-[28px] lg:w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="
          enabled
            ? 'translate-x-4 sm:translate-x-5 md:translate-x-6 lg:translate-x-7'
            : 'translate-x-0'
        "
        class="pointer-events-none inline-block h-[12px] w-[12px] sm:h-[16px] sm:w-[16px] md:h-[20px] md:w-[20px] lg:h-[24px] lg:w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
    </Switch>
  </div>

  <ul
    v-if="enabled"
    class="plan_container"
    :class="{ haveplan: dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length !== 0 }">
    <draggable v-model="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList">
      <template v-slot:item="{ item }">
        <PlanItem :plan="item" :mode="enabled" />
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
      :plan="plan"
      @click="getLatLng(plan)"
      :checkbox="true" />
  </ul>

  <br />

  <div v-if="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length === 0">
    <div class="corner-message">여행지를 선택해주세요!</div>
    <img src="@/assets/img/bill-pay.png" class="corner-image" alt="Corner Image"/>
  </div>
  <div class="button_box" v-else>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="saveSchedule">
      저장
    </button>
    <button
      @click="deleteSchedule"
      type="button"
      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      v-if="deletedchecked.length > 0" >
      삭제
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

.corner-message {
  position: absolute;
  bottom: 250px;
  right: 170px;
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

.toggle_container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
