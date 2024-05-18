import { ref, } from 'vue'
import { defineStore } from 'pinia'
export const usePlanStore = defineStore('plan', () => {
 

const plans = ref([]);

const setPlan = (area) =>{
  plans.value.push(area);
}

  return { plans,setPlan }
})