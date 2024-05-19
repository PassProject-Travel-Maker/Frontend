<script setup>
import PlanItem from '@/components/plan/component/PlanItem.vue'
import {storeToRefs} from 'pinia';
import { ref } from "vue";
import {usePlanStore} from '@/stores/plan.js';
import Draggable from "vue3-draggable";

const planstore= usePlanStore();
const {plans} = storeToRefs(planstore);

console.log(plans);
</script>

<template>
        <h2>여행 일정</h2>
        <ul>  
          <PlanItem v-for="(plan) in plans" :key="plan" :plan="plan"/>
        </ul>
        <br>

        <div v-if="plans.length===0">여행지를 선택해주세요!</div>
        <div class="button_box" v-else>
          <div></div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            저장
          </button>
          <button type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            초기화
            </button>
        </div>
</template>

<style scoped>

.button_box{
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: flex-end;
}
</style>