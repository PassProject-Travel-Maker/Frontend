import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import { getMyInfoApi, getMyTravelListApi } from "@/apis/memberApi";
import { getPlanApi } from "@/apis/planApi";
export const useMemberStore = defineStore("member", () => {
  const myInfo = ref({});
  const myTravelList = ref({});
  const myPlan = ref({});
  const myPath = ref([]);
  const picked = ref(1);
  const pickedindex = ref(0);
  const dayForPlanDtoList = ref([]);
  // const colors=ref(['#22d3ee']);
  const colors = ref(["#336699", "#86bbd8", "#2f4858", "#9ee493", "#daf7dc"]);
  console.log("color: ", colors);
  const location = ref({
    latitude: 33.450705,
    longitude: 126.570667,
    level: 10,
  });

  const makePath = () => {
    const path = [];
    dayForPlanDtoList.value[pickedindex.value].scheduleDetailResponseDtoList.forEach((schedule) => {
      path.push({
        lat: schedule.attractionInfoDto.latitude,
        lng: schedule.attractionInfoDto.longitude,
      });
    });
    console.log(path);
    myPath.value = path;
  };
  watch(picked, () => {
    console.log("날짜 선택 감시");
    pickedindex.value = dayForPlanDtoList.value.findIndex((day) => day.num === picked.value);
    console.log(pickedindex.value);
    makePath();
  });

  const getMyInfo = async (memberId) => {
    const response = await getMyInfoApi(memberId);
    console.log(response);
    myInfo.value = response.data;
  };

  const getMyTravelList = async (memberId) => {
    const response = await getMyTravelListApi(memberId);
    console.log(response);
    myTravelList.value = response.data;
  };

  const getPlanDetail = async (planId) => {
    //새로 계획을 볼때마다 1일차로 이동
    pickedindex.value = 0;
    const response = await getPlanApi(planId);
    myPlan.value = response.data;
    dayForPlanDtoList.value = myPlan.value.dayDetailResponseDtoList;
    console.log(dayForPlanDtoList.value);

    location.value = {
      latitude:
        dayForPlanDtoList.value[0].scheduleDetailResponseDtoList[0].attractionInfoDto.latitude,
      longitude:
        dayForPlanDtoList.value[0].scheduleDetailResponseDtoList[0].attractionInfoDto.longitude,
      level: 10,
    };
  };

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const getLatLng = (area) => {
    location.value = {
      latitude: area.latitude,
      longitude: area.longitude,
      level: 8,
    };

    console.log(location.value);
  };

  return {
    getMyInfo,
    getMyTravelList,
    myInfo,
    myTravelList,
    getPlanDetail,
    dayForPlanDtoList,
    picked,
    pickedindex,
    myPlan,
    getLatLng,
    location,
    myPath,
    makePath,
    colors,
  };
});
