<script setup>
import PlanItem from "@/components/plan/component/PlanItem.vue";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const memberstore = useMemberStore();

const { getLatLng, deletePlan } = memberstore;
const { dayForPlanDtoList, picked, pickedindex, colors, myPlan } = storeToRefs(memberstore);

console.log(dayForPlanDtoList);
console.log(pickedindex);
</script>

<template>
  <div class="day_container">
    <div class="day_box" v-for="day in dayForPlanDtoList" :key="day.num">
      <span :class="{ selected: picked === day.num }" @click="picked = day.num">
        {{ day.num }} 일차
      </span>
    </div>
  </div>
  <hr class="divider" />
  <div class="icons-container">
    <i class="bi bi-pencil-square icon"></i>
    <i class="bi bi-trash3 icon" @click="deletePlan(myPlan.id)"></i>
  </div>
  <ul
    class="plan_container"
    :class="{
      haveplan: dayForPlanDtoList[pickedindex].scheduleDetailResponseDtoList.length !== 0,
    }">
    <PlanItem
      v-for="plan in dayForPlanDtoList[pickedindex].scheduleDetailResponseDtoList"
      :key="plan.attractionInfoDto.id"
      :plan="plan.attractionInfoDto"
      style="cursor: pointer"
      @click="getLatLng(plan.attractionInfoDto)"
      :checkbox="false"
      class="hover:bg-sky-700" />
  </ul>
</template>

<style scoped>
.selected {
  font-weight: bold;
}
.day_box {
  width: 20%;
  border: 1px solid #a1a1aa;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475569;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  /* margin: 5px; */
}
.day_box:hover {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
}

.day_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.divider {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #e4e4e7;
}

.icons-container {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 0 20px;
}

.icon {
  font-size: 20px;
  cursor: pointer;
}

.plan_container {
  margin-top: 30px;
  padding: 20px;
}
</style>
