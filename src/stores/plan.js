import { ref,watch } from 'vue'
import { defineStore } from 'pinia'
export const usePlanStore = defineStore('plan', () => {


const title = ref("");
const description = ref("");
const daycount=ref(1);
const picked =ref("");
const pickedindex = ref(0);

watch(picked, ()=>{
  console.log("날짜 선택 감시");
  pickedindex.value = dayForPlanDtoList.value.findIndex(day => day.num === picked.value);
  console.log(pickedindex.value);
})
const dayForPlanDtoList = ref([
  {
    num : 1,
    scheduleForPlanDtoList : [],
  }
])


const plans = ref([]);


const setPlan = (area) =>{
  console.log(area);

  //어떤날의 스케줄인지 확인해야한다.
  const plans = dayForPlanDtoList.value[pickedindex.value].scheduleForPlanDtoList;

  //이미 등록된 관광지인지 확인
  const index = plans.findIndex(plan => plan.attractionId === area.attractionId);
  console.log(index);
  //등록되지 않은 관광지
  if(index === -1){
    plans.push(area);
  }
}


const addDay = () =>{
  daycount.value++;
  dayForPlanDtoList.value.push({
    num : daycount.value,
    scheduleForPlanDtoList : [],
  })
  //선택된 날짜 인덱스 반환
  pickedindex.value=daycount.value-1;
}


  return { plans,setPlan,title,description,dayForPlanDtoList,addDay,picked,pickedindex}
})