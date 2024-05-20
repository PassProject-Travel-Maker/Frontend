import { ref } from "vue";
import { defineStore } from "pinia";
import authApi from "@/apis/authApi";
import { getMyInfoApi, getMyTravelListApi } from "@/apis/memberApi";
import { jwtDecode } from "jwt-decode";
import { getPlanApi } from "@/apis/planApi";
export const useMemberStore = defineStore("member", () => {
  const myInfo = ref({});
  const myTravelList = ref({});
  const myPlan = ref({});

  const picked = ref(1);
  const pickedindex = ref(0);

  const dayForPlanDtoList = ref([]);

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
    const response = await getPlanApi(planId);
    myPlan.value = response.data;
    dayForPlanDtoList.value = myPlan.value.dayDetailResponseDtoList;
    console.log(dayForPlanDtoList.value);
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
  };
});
