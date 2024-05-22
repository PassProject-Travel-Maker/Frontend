import { ref, watch } from "vue";
import { defineStore } from "pinia";
export const usePlanStore = defineStore("plan", () => {
  const title = ref("");
  const description = ref("");
  const daycount = ref(1);
  const picked = ref(1);
  const pickedindex = ref(0);
  const enabled = ref(false);
  const deletedchecked = ref([]);
  const dayForPlanDtoList = ref([
    {
      num: 1,
      scheduleForPlanDtoList: [],
    },
  ]);
  const plans = ref([]);

  watch(picked, () => {
    console.log("날짜 선택 감시 : " + picked.value);

    pickedindex.value = dayForPlanDtoList.value.findIndex((day) => day.num === picked.value);
    console.log(pickedindex.value);
  });

  const setPlan = (area) => {
    //
    if (enabled.value) {
      alert("관광지를 추가하려면 버튼을 비활성화 해주세요!");
    } else {
      console.log(area);

      //어떤날의 스케줄인지 확인해야한다.
      const plans = dayForPlanDtoList.value[pickedindex.value].scheduleForPlanDtoList;

      //이미 등록된 관광지인지 확인
      const index = plans.findIndex((plan) => plan.attractionId === area.attractionId);
      console.log(index);
      //등록되지 않은 관광지
      if (index === -1) {
        plans.push(area);
      } else {
        alert("이미 등록된 여행지 입니다!");
      }
    }
  };

  const addDay = () => {
    daycount.value++;
    dayForPlanDtoList.value.push({
      num: daycount.value,
      scheduleForPlanDtoList: [],
    });
    //선택된 날짜 인덱스 반환
    pickedindex.value = daycount.value - 1;
    picked.value = daycount.value;
    console.log(picked.value);
  };

  const deleteSchedule = () => {
    //어떤날의 스케줄인지 확인해야한다.
    let findplans = dayForPlanDtoList.value[pickedindex.value].scheduleForPlanDtoList;

    //해당 스케줄의 plan id가 일치하면 배열에서 삭제한다
    deletedchecked.value.forEach((checked) => {
      console.log(checked);
      findplans = findplans.filter((plan) => plan.attractionId !== checked);
    });
    console.log(findplans);
    deletedchecked.value = [];

    dayForPlanDtoList.value[pickedindex.value].scheduleForPlanDtoList = findplans;
  };

  const removeDay = (daynum) => {
    if (dayForPlanDtoList.value.length == 1) {
      alert("계획은 하루 이상 가야합니다!");
    }
    //계획이 여러개일때
    else {
      dayForPlanDtoList.value.splice(daynum - 1, 1);

      //day 한칸씩 뒤로
      for (let i = daynum - 1; i < dayForPlanDtoList.value.length; i++) {
        console.log(i);
        dayForPlanDtoList.value[i].num--;
      }
      console.log(dayForPlanDtoList.value);
      picked.value = 1;
      daycount.value--;

      console.log(picked);
      console.log(pickedindex);
    }
    console.log(daynum);
  };

  return {
    plans,
    setPlan,
    title,
    description,
    dayForPlanDtoList,
    addDay,
    picked,
    pickedindex,
    enabled,
    deleteSchedule,
    deletedchecked,
    removeDay,
  };
});
