<script setup>
import PlanItem from "@/components/plan/component/PlanItem.vue";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const memberstore = useMemberStore();
const { dayForPlanDtoList, picked, pickedindex, myPlan } = storeToRefs(memberstore);
console.log(pickedindex);
</script>

<template>
  <div>{{ myPlan.title }}</div>
  <div>{{ myPlan.description }}</div>
  <div class="day_container">
    <div class="day_box" v-for="day in dayForPlanDtoList" :key="day.num">
      <span :class="{ selected: picked === day.num }" @click="picked = day.num">
        {{ day.num }} 일차
      </span>
    </div>
  </div>

  <ul
    class="plan_container"
    :class="{
      haveplan: dayForPlanDtoList[pickedindex].scheduleDetailResponseDtoList.length !== 0,
    }">
    <PlanItem
      v-for="plan in dayForPlanDtoList[pickedindex].scheduleDetailResponseDtoList"
      :key="plan"
      :plan="plan" />
  </ul>
</template>

<style scoped>
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
