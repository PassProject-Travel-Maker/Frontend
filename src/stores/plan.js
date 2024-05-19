import { ref, } from 'vue'
import { defineStore } from 'pinia'
export const usePlanStore = defineStore('plan', () => {
 

const plans = ref([]);

const setPlan = (area) =>{

  console.log(area);
  const index = plans.value.findIndex(plan => plan.id === area.id);

  console.log(index);
  //등록되지 않은 관광지
  if(index === -1){
    plans.value.push(area);
  }
}

  return { plans,setPlan }
})