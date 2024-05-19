<script setup>
import PlanItem from '@/components/plan/component/PlanItem.vue'
import {storeToRefs} from 'pinia';
import {usePlanStore} from '@/stores/plan.js';
import Draggable from "vue3-draggable";
import {ref} from 'vue';

const mode = ref(false);
const planstore= usePlanStore();
const {addDay} = planstore;
const {dayForPlanDtoList,picked,pickedindex} = storeToRefs(planstore);

const changeMode = () =>{
mode.value=!mode.value;
}
</script>
<template>
        <h2>여행 일정</h2>
        <div v-for="(day) in dayForPlanDtoList" :key="day.num">
        <input type="radio" name="sex" :value="day.num" v-model="picked" checked/>
        <span> {{day.num}} 일차</span>
        </div>
        <div @click="addDay">날짜 추가</div>
        <ul v-if="mode">
        <draggable v-model="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList">
        <template v-slot:item="{ item }">
          <PlanItem :plan="item"/>
        </template>
      </draggable>
          </ul>
        <ul v-else>
          <PlanItem v-for="(plan) in dayForPlanDtoList[pickedindex].scheduleForPlanDtoList" :key="plan" :plan="plan"/>
        </ul>

        <br>

        <div v-if="dayForPlanDtoList[pickedindex].scheduleForPlanDtoList.length===0">여행지를 선택해주세요!</div>
        <div class="button_box" v-else>
           <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-auto" @click="changeMode" v-if="mode">
            돌아가기
          </button>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-auto" @click="changeMode" v-else>
            순서바꾸기
          </button>
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